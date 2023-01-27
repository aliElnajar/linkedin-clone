import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/AuthContext";
import { PostsContextProvider } from "./store/PostsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <PostsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostsContextProvider>
  </AuthContextProvider>
);
