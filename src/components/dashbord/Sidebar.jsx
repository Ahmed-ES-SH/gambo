import React from "react";
import { NavLinks } from "../../Constants/opation";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Menue } from "../../context/Menue";

function Sidebar() {
  const menue = useContext(Menue);
  const openmenue = menue.openmenue;

  return (
    <div>
      <div
        style={{ width: openmenue ? "200px" : "fit-content" }}
        className="shadow-2xl h-screen  duration-300  "
      >
        {NavLinks.map((link, key) => (
          <NavLink
            className="p-1  rounded-sm flex items-center   justify-between hover:bg-orange-400 duration-300 w-full"
            key={key}
            to={link.to}
          >
            <h1
              style={{ display: openmenue ? "block" : "none" }}
              className=" duration-200 "
            >
              {link.link}
            </h1>
            <div>{link.icon}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
