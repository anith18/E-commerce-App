import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="border-end border-2 vh-100" style={{ width: "18%" }}>
      <div className="d-flex flex-column gap-3 pt-4 ps-5 text-body">
        
        <NavLink className="d-flex align-items-center gap-3 border border-secondary p-2 text-decoration-none" to="/add">
          <img className="img-fluid" style={{ width: "20px", height: "20px" }} src={assets.add_icon} alt="Add Icon" />
          <p className="d-none d-md-block mb-0">Add Items</p>
        </NavLink>

        <NavLink className="d-flex align-items-center gap-3 border border-secondary p-2 text-decoration-none" to="/list">
          <img className="img-fluid" style={{ width: "20px", height: "20px" }} src={assets.order_icon} alt="List Icon" />
          <p className="d-none d-md-block mb-0">List Items</p>
        </NavLink>

        <NavLink className="d-flex align-items-center gap-3 border border-secondary p-2 text-decoration-none" to="/orders">
          <img className="img-fluid" style={{ width: "20px", height: "20px" }} src={assets.order_icon} alt="Order Icon" />
          <p className="d-none d-md-block mb-0">Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
