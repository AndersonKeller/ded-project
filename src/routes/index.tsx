import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { DashBoard } from "../pages/DashBoard";
import { CharPage } from "../pages/CharPage";
export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<DashBoard />}></Route>
      <Route path="/user/char" element={<CharPage />}></Route>
    </Routes>
  );
}
