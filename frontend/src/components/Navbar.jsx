import React, { useCallback, useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const {setShowSearch,getCartCount,navigate,setToken,token,setCartItems}=useContext(ShopContext);

  const Logout=()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})

  }
  

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Brand Logo */}
        <a className="navbar-brand" href="/">
          <img src={assets.logo} alt="Logo" style={{ height: "50px" }} />
        </a>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu} // Toggle menu visibility
          aria-expanded={menuVisible}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Content */}
        <div className={`collapse navbar-collapse ${menuVisible ? "show" : ""}`} id="navbarSupportedContent">
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink 
            className={({ isActive }) => isActive ? "nav-link active-link fw-bold" : "nav-link fw-bold"} 
             to="/" onClick={closeMenu}> HOME</NavLink>

            </li>
            <li className="nav-item">
            <NavLink 
            className={({ isActive }) => isActive ? "nav-link active-link fw-bold" : "nav-link fw-bold"} 
             to="/collection" onClick={closeMenu}> COLLECTIONS</NavLink>
            </li>
            <li className="nav-item">
            <NavLink 
            className={({ isActive }) => isActive ? "nav-link active-link fw-bold" : "nav-link fw-bold"} 
             to="/about" onClick={closeMenu}> ABOUT</NavLink>
            </li>
            
            <li className="nav-item">
            <NavLink 
            className={({ isActive }) => isActive ? "nav-link active-link fw-bold" : "nav-link fw-bold"} 
             to="/contact" onClick={closeMenu}> CONTACT</NavLink>
            </li>
          </ul>

          {/* Right-side Icons */}
          <div className="d-flex align-items-center gap-4">
            {/* Search Icon */}
            <div className="icon-container">
              <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="icon-img" alt="Search" />
            </div>

            {/* Profile Icon with Dropdown */}
            <div className="icon-container position-relative">
              
              <img onClick={()=>token? null: navigate('/login')} src={assets.profile_icon} className="icon-img" alt="Profile" />
              {/* dropdown */}
              {token && <div className="profile-dropdown">
                <p className="dropdown-item">My Profile</p>
                <p onClick={()=>navigate('/orders')} className="dropdown-item">Orders</p>
                <p onClick={Logout} className="dropdown-item text-danger">Logout</p>
              </div>}
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="icon-container">
              <img src={assets.cart_icon} className="icon-img" alt="Cart" />
               <p className="cart-badge">{getCartCount()}</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Hover Effect for Dropdown */}
      <style>
        {`
          .icon-container {
            cursor: pointer;
          }
          
          .icon-img {
            width: 25px;
            transition: transform 0.2s;
          }
          
          .icon-img:hover {
            transform: scale(1.1);
          }
          
          .position-relative:hover .profile-dropdown {
            display: block !important;
          }
          
          .profile-dropdown {
            display: none;
            position: absolute;
            top: 110%;
            right: 0;
            min-width: 160px;
            background: white;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            padding: 10px;
            z-index: 1000;
          }
          
          .dropdown-item {
            padding: 8px 12px;
            transition: background 0.3s;
            cursor: pointer;
          }
          
          .dropdown-item:hover {
            background: #f0f0f0;
            border-radius: 5px;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
