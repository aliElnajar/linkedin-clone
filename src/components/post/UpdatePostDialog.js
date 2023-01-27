import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
} from "@mui/material";
import { useState } from "react";
import usePostsContext from "../../store/PostsContext";

const UpdatePostDialog = ({ setModalOpened, modalOpened, id }) => {
  const { editingPostHandler } = usePostsContext();
  const [updatedPostMsg, setUpdatedPostMsg] = useState("");
  const editHandler = (e) => {
    e.preventDefault();
    editingPostHandler(id, updatedPostMsg);
    setUpdatedPostMsg("");
    setModalOpened(false);
  };
  return (
    <Dialog open={modalOpened} onClose={() => setModalOpened(false)}>
      <Box maxWidth="500px">
        <DialogTitle>what's in your mind</DialogTitle>
        <form onSubmit={editHandler}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="post"
              type="text"
              fullWidth
              variant="filled"
              placeholder="edit your post"
              multiline
              value={updatedPostMsg}
              onChange={(e) => setUpdatedPostMsg(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={() => setModalOpened(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="warning">
              Edit
            </Button>
          </DialogActions>
        </form>
      </Box>
    </Dialog>
  );
};

export default UpdatePostDialog;
