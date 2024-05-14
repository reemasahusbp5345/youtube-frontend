import React from "react";
import { sidebarNav } from "../utils/constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-black h-screen text-white p-2">
      <ul>
        {sidebarNav?.map((sidebarItem, idx) => (
          <Link to={sidebarItem?.path} key={idx}>
            <li className="flex justify-items-start p-4 m-2 text-center border-2">
              <img className="w-6 mr-2" src={sidebarItem?.icon} alt={sidebarItem?.title} />
             <p>  {sidebarItem?.title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
