import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./pages/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendUrl=import.meta.env.VITE_BACKEND_URL 


const App = () => {
  const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):' ');

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    <div className="bg-light min-vh-100">
      <ToastContainer />
      { token ===""
      ? <Login setToken={setToken}/> :
      <>
      <Navbar setToken={setToken} />
      <hr />
      <div className="d-flex w-100">
        <Sidebar />
        <div className="w-75 mx-auto ms-md-5 my-4 text-secondary">
          <Routes>
            <Route path="/add" element={<Add token={token} />} />
            <Route path="/list" element={<List token={token} />} />
            <Route path="/orders" element={<Orders token={token}/>} />
          </Routes>
        </div>
      </div>
      </> 
      }
      
    </div>
  );
};

export default App;
