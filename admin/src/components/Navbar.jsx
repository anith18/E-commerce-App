import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
    return (
      <div className="d-flex align-items-center justify-content-between py-2 px-4">
        <img className="img-fluid" style={{ width: "max(10%, 80px)" }} src={assets.logo} alt="Logo" />
        <button onClick={()=>setToken('')} className="btn btn-dark px-4 py-2 px-sm-5 py-sm-2 rounded-pill">
          Logout
        </button>
      </div>
    );
  };
  

export default Navbar
