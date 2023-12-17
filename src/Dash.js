import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
export default function Dash() {
  return (
    <div>
      <Topbar />
      <div className="cont-flex">
        <Sidebar />
        <div style={{ width: "90%" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
