import Topbar from "../components/dashbord/Topbar";
import Sidebar from "../components/dashbord/Sidebar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { Menue } from "../context/Menue";

function Dashbord() {
  const menue = useContext(Menue);
  const Dark = menue.Dark;

  return (
    <div>
      <div
        style={{
          backgroundColor: Dark ? "#111" : "#eee",
          color: Dark ? "#999" : "black",
        }}
      >
        <Topbar />
      </div>
      <div
        style={{
          backgroundColor: Dark ? "#111" : "#eee",
          color: Dark ? "#999" : "black",
        }}
        className="flex w-full gap-1"
      >
        <Sidebar />
        <div
          style={{
            backgroundColor: Dark ? "#111" : "#eee",
            color: Dark ? "#999" : "black",
          }}
          className="w-full"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
