import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Dash from "./Dash";
import Users from "./Users";
import Update from "./Update";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dash />}>
          <Route exact path="users" element={<Users />}></Route>
          <Route path="users/:id" element={<Update />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
