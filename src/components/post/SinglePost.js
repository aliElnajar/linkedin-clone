import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { useState } from "react";
import UpdatePostDialog from "./UpdatePostDialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { postButtons } from "../helpers/Constants";
import usePostsContext from "../../store/PostsContext";
import useAuthContext from "../../store/AuthContext";
const SinglePost = ({ image, postAuthor, postText, authorPicture, id,localId }) => {
  const { user } = useAuthContext();
  const { deletePostHandler } = usePostsContext();
  const [modalOpened, setModalOpened] = useState(false);
  
  const currentLocalId=user.reloadUserInfo.localId
 const sameAuthor=currentLocalId===localId
  return (
    <Card width="100%">
      <CardHeader
        avatar={
          <Avatar
            src={authorPicture}
            sx={{ bgcolor: "red" }}
            aria-label="recipe"
          />
        }
        action={
          sameAuthor ? (
            <div>
              <IconButton
                aria-label="edit"
                onClick={() => setModalOpened(true)}
              >
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => deletePostHandler(id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          ) : null
        }
        title={postAuthor}
        subheader="jan 27 2023"
      />
      {image ? (
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
      ) : null}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postText}
        </Typography>
        <UpdatePostDialog
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          id={id}
        />
      </CardContent>
      <Stack direction="row" justifyContent="space-between" p={2}>
        {postButtons.map((item) => (
          <Button
            key={item.name}
            sx={{ color: "gray", fontSize: { xs: "12px", md: "16px" } }}
            startIcon={<item.icon />}
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </Card>
  );
};

export default SinglePost;
