import React, { useState } from "react";
import axios from "axios"
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const onSubmitHandler =async (e)=>{
        try{
            e.preventDefault();
            const response =await axios.post(backendUrl+'/api/user/admin',{email,password})
            if(response.data.success){
                setToken(response.data.token)
            }
            else{
                toast.error(response.data.message)
            }
        }
        catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }



  return (
    <div className="vh-100 d-flex align-items-center justify-content-center w-100">
      <div className="bg-white shadow-lg rounded p-4 w-100" style={{ maxWidth: "400px" }}>
        <h1 className="h4 fw-bold mb-4">Admin Panel</h1>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label className="form-label text-secondary">Email Address</label>
            <input onChange={(e)=>setEmail(e.target.value)} value={email}
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-secondary">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} value={password}
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button className="btn btn-dark w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
