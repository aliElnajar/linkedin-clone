import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import image from "../media/undraw_hello_re_3evm.svg";
import Error from "../components/Error";
import { LoadingButton } from "@mui/lab";
import useAuthContext from "../store/AuthContext";
const Login = () => {
  const {
    changeHaveAccountHandler,
    haveAccount,
    authHandler,
    authError,
    authLoading,
  } = useAuthContext();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [fullnameValue, setFullnameValue] = useState("");
  const [profilePicValue, setProfilePicValue] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    let credentials;
    haveAccount
      ? (credentials = {
          email: emailValue,
          password: passwordValue,
        })
      : (credentials = {
          email: emailValue,
          password: passwordValue,
          name: fullnameValue,
          photo: profilePicValue,
        });
    authHandler(credentials);
    setEmailValue("");
    setPasswordValue("");
    setFullnameValue("");
    setProfilePicValue("");
  };
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={8}
      sx={{ m: "5vw auto" }}
    >
      <Box
        width={{ xs: "90%", md: "50%" }}
        sx={{
          backgroundColor: "white",
          p: "20px 10px 50px",
          borderRadius: "30px",
          textAlign: "center",
        }}
      >
        {authError?.state ? <Error message={authError.message} /> : null}
        <Typography variant="h4" color="primary.light" my={2}>
          {haveAccount ? "Login" : "sign up for free"}
        </Typography>
        <form onSubmit={submitHandler}>
          <Stack spacing={2} width="80%" mx="auto">
            {!haveAccount ? (
              <TextField
                type="text"
                label="full name"
                value={fullnameValue}
                onChange={(e) => setFullnameValue(e.target.value)}
              />
            ) : null}
            <TextField
              type="email"
              required
              label="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <TextField
              type="password"
              required
              label="password "
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />

            {!haveAccount ? (
              <TextField
                type="text"
                label="profile picture link"
                value={profilePicValue}
                onChange={(e) => setProfilePicValue(e.target.value)}
              />
            ) : null}
            <LoadingButton
              loading={authLoading}
              type="submit"
              variant="outlined"
            >
              {haveAccount ? "login" : "create account"}
            </LoadingButton>
            <Button onClick={changeHaveAccountHandler}>
              {haveAccount
                ? "dont have  account? sign up"
                : "have an account? Login  "}
            </Button>
          </Stack>
        </form>
      </Box>
      <img src={image} style={{ maxWidth: "400px" }} />
    </Stack>
  );
};

export default Login;
