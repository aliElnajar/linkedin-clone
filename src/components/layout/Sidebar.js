import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import useContextProvider from "../../store/AuthContext";
const Sidebar = () => {
  const {
    user: { photoURL, displayName },
  } = useContextProvider();
  return (
    <Box
      mx="auto"
      sx={{
        width: { xs: "100%", sm: "70%", md: "20%" },
        m: { xs: "10px auto 15px", sm: "0px auto" },
      }}
    >
      <Card sx={{ position: "relative", mb: "10px" }}>
        <CardMedia
          component="img"
          height="60"
          image="https://images.unsplash.com/photo-1615196534055-7aa534f6836b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="green iguana"
        />
        <Avatar
          src={photoURL}
          sx={{
            width: "60px",
            height: "60px",
            position: "absolute",
            top: "10px",
            left: "40%",
          }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div" my="10px">
            {displayName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            looking for opportunity in react.js, coldcaller lets see
          </Typography>
          <Divider />
          <Stack
            my="15px"
            px="5px"
            direction="row"
            justifyContent="space-between"
          >
            <Typography variant="body1" color="GrayText">
              Who viewed you profile
            </Typography>
            <span style={{ color: "#0a66c2" }}>350</span>
          </Stack>
          <Stack direction="row" justifyContent="space-between" px="5px" mb={3}>
            <Typography variant="body1" color="GrayText">
              impressions of your post
            </Typography>
            <span style={{ color: "#0a66c2" }}>350</span>
          </Stack>
          <Button
            sx={{
              color: "#555",
              fontWeight: "bold",
              fontSize: "12px",
              justifyContent: "flex-start",
            }}
            startIcon={<BookmarkIcon size="small" />}
            fullWidth
          >
            my items
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Sidebar;
