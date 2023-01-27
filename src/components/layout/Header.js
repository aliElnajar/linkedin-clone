import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import { headerIcons } from "../helpers/Constants";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuthContext from "../../store/AuthContext";
const Header = () => {
  const { signoutHandler, user } = useAuthContext();
  const profilePic = user?.photoURL;
  return (
    <Box>
      <AppBar position="fixed" color="inherit">
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", ml: "30px" }}
          >
            <LinkedInIcon sx={{ fontSize: "45px" }} color="primary" />
            <Box maxWidth={350}>
              <TextField
                fullWidth
                placeholder="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  style: searchInputStyles,
                }}
              />
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            {headerIcons.map((item, i) => {
              return (
                <IconButton
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    display: { xs: "none", md: "inline-block" },
                  }}
                >
                  <item.icon color="action" sx={{ fontSize: "30px" }} />
                  <Typography variant="body2">{item.name}</Typography>
                </IconButton>
              );
            })}
            <IconButton onClick={() => signoutHandler()}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<LogoutIcon sx={{ fontSize: "20px" }} />}
              >
                <Avatar
                  src={profilePic}
                  sx={{ width: "40px", height: "40px" }}
                />
              </Badge>
            </IconButton>
            <IconButton>
              <ViewCompactIcon color="action" sx={{ fontSize: "30px" }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
const searchInputStyles = {
  maxHeight: "40px",
  padding: "15px 10px",
  backgroundColor: "#d4d9e1",
  border: "none",
};
