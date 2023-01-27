import React, { useContext, useEffect, useReducer } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import reducer from "./AuthReducer";
const AuthContext = React.createContext();

const initialState = {
  haveAccount: false,
  user: null,
  dialogIsOpened: true,
  authError: { state: false, message: "" },
  authLoading: false,
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const auth = getAuth();
  const changeHaveAccountHandler = () => {
    dispatch({ type: "LOGORSIGNUP" });
  };

  // 1-UPDATE UI ON CHANGE OF AUTH
  useEffect(() => {
    ("fired");
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch({ type: "USER_IN", payload: user });
      else {
        dispatch({ type: "USER_OUT" });
      }
    });
  }, [onAuthStateChanged]);

  // 2-SIGN OUT USER

  const signoutHandler = async () => {
    await signOut(auth);
  };

  // 3-LOGGING IN OR SIGNING UP

  const authHandler = async (cred) => {
    dispatch({ type: "START_AUTH_LOADING" });
    try {
      if (state.haveAccount) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          cred.email,
          cred.password
        );
      } else {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          cred.email,
          cred.password
        );
        await updateProfile(user, {
          displayName: cred.name,
          photoURL: cred.photo,
        });
      }
    } catch (err) {
      dispatch({ type: "AUTH_ERR", payload: err.message });
      setTimeout(() => {
        dispatch({ type: "RESET_ERR" });
      }, 3000);
    }
    dispatch({ type: "END_AUTH_LOADING" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        changeHaveAccountHandler,
        authHandler,
        signoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
