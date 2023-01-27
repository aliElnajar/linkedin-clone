import { Box, Stack } from "@mui/material";
import React from "react";
import Leftbar from "./Rightbar";
import Posts from "../post/Posts";
import Sidebar from "./Sidebar";
const Body = () => {
  return (
    <Box maxWidth="1300px" mx="auto">
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        my={2}
      >
        <Sidebar />
        <Posts />
        <Leftbar />
      </Stack>
    </Box>
  );
};

export default Body;
