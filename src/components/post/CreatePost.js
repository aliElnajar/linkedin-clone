import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import { useState } from "react";
import usePostsContext from "../../store/PostsContext";
import { newPostActions } from "../helpers/Constants";
const CreatePost = () => {
  const { postingHandler } = usePostsContext();
  const [newPost, setNewPost] = useState("");
  const submitPostHandler = async (e) => {
    e.preventDefault();
    postingHandler(newPost);
    setNewPost("");
  };
  return (
    <Card
      sx={{
        width: { xs: "100%", md: "90%" },
        p: "10px 5px 0px",
        borderRadius: "20px",
      }}
    >
      <CardContent
        sx={{
          textAlign: "center",
        }}
      >
        <form onSubmit={submitPostHandler}>
          <TextField
            fullWidth
            placeholder="start a post"
            InputProps={{ style: { borderRadius: "30px" } }}
            onChange={(e) => setNewPost(e.target.value)}
            value={newPost}
          />

          <Stack direction="row" spacing={2} p={2}>
            {newPostActions.map((item) => {
              const { color } = item;
              return (
                <Button
                  key={item.name}
                  startIcon={<item.icon color={color} />}
                  sx={{
                    color: "gray",
                    width: "25%",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
          </Stack>
          <Button type="submit" variant="contained" fullWidth>
            post
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
