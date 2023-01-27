import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login";
import useContextProvider from "./store/AuthContext";
import Home from "./pages/Home";
function App() {
  const { user } = useContextProvider();
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
    </Routes>
  );
}

export default App;
