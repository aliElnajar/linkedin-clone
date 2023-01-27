import { Box, Divider, Stack } from "@mui/material";
import CreatePost from "./CreatePost";
import SinglePost from "./SinglePost";
import usePostsContext from "../../store/PostsContext";
const Posts = () => {
  const { allPosts } = usePostsContext();

  return (
    <Box sx={{ width: { xs: "100%", md: "60%" } }}>
      <Stack justifyContent="center" alignItems="center" spacing={1}>
        <CreatePost />
        <Divider />
        <Box
          sx={{
            width: {
              xs: "105%",
              md: "90%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            },
          }}
        >
          {allPosts.map((item) => (
            <SinglePost key={item.id} id={item.id} {...item.data} />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Posts;
