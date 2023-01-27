import React, { useContext, useEffect, useState } from "react";
import {
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db, postsRef } from "../components/helpers/Firebase";
import useContextProvider from "./AuthContext";
const postsContext = React.createContext();

export const PostsContextProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);

  const { user } = useContextProvider();
  useEffect(() => {
    const unsubscribe = onSnapshot(postsRef, (snapshot) => {
      setAllPosts(
        snapshot.docs
          .map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
          .sort(
            (a, b) =>
              b.data?.postTimeStamp?.seconds - a.data?.postTimeStamp?.seconds
          )
      );
    });
    return () => unsubscribe();
  }, []);

  const postingHandler = async (message) => {
    await addDoc(postsRef, {
      postText: message,
      postAuthor: user.displayName,
      authorPicture: user.photoURL,
      postTimeStamp: serverTimestamp(),
      localId:user.reloadUserInfo.localId,
    });
  };

  const deletePostHandler = async (id) => {
    await deleteDoc(doc(db, "posts", id));
  };

  const editingPostHandler = async (id, message) => {
    await updateDoc(doc(db, "posts", id), {
      postText: message,
    });
  };

  return (
    <postsContext.Provider
      value={{
        editingPostHandler,
        deletePostHandler,
        postingHandler,
        allPosts,
        modalOpened,
        setModalOpened,
      }}
    >
      {children}
    </postsContext.Provider>
  );
};

const usePostsContext = () => {
  return useContext(postsContext);
};

export default usePostsContext;
