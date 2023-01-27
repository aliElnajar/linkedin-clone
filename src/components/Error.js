import { Alert, AlertTitle } from "@mui/material";
import React from "react";

const Error = ({ message }) => {
  return (
    <>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {message || "something went wrong"} — <strong>check it out!</strong>
      </Alert>
    </>
  );
};

export default Error;
