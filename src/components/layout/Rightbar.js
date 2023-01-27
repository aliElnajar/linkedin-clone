import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Rightbar = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "25%" },
        display: { xs: "none", sm: "block" },
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h6">Add to your feed</Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {listContancts.map((person) => (
              <ListItem key={person.name} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={person.name} src={person.img} />
                </ListItemAvatar>
                <ListItemText
                  primary={person.name}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline-block" }}
                        component="span"
                        variant="body1"
                        color="gray"
                      >
                        {person.job}
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{ borderRadius: "20px", color: "gray" }}
                      >
                        Follow
                      </Button>
                    </>
                  }
                />
              </ListItem>
            ))}
            <Button
              endIcon={<ArrowForwardIcon />}
              sx={{ color: "gray", fontSize: "12px", pb: "0" }}
            >
              view all recommendations
            </Button>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Rightbar;

const listContancts = [
  {
    name: "rami ali",
    job: "Tech recruiter at ABC holdings",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "zain sami",
    job: "Senior Fullstack at EFG ",
    img: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "muhammad essam",
    job: "Talent acquistion at SAO  ",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];
