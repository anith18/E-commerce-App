import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [name,setName]=useState('')
  const [currentState, setCurrentState] = useState('Login');
  const {token,setToken,navigate,backendUrl}=useContext(ShopContext);
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if(currentState==='Sign Up'){
        const response=await axios.post(`${backendUrl}/api/user/register`,{name,email,password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      }
      else{
        const response=await axios.post(`${backendUrl}/api/user/login`,{email,password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className="container d-flex flex-column align-items-center" style={{ maxWidth: '400px' }}>
      <div className='d-flex align-items-center gap-2 mb-2 mt-5'>
        <p className='prata-regular fs-3 mb-0'>{currentState}</p>
        <hr className='border-none flex-grow-1' style={{ height: '1.5px', backgroundColor: '#212529' }} />
      </div>
      
      {currentState === 'Login' ? '' : 
        <input onChange={(e)=>setName(e.target.value)} value={name}
          type="text" 
          className='w-100 px-3 py-2 border border-dark mb-3' 
          placeholder="Name" 
          required 
        />
      }
      
      <input onChange={(e)=>setEmail(e.target.value)} value={email}
        type="email" 
        className='w-100 px-3 py-2 border border-dark mb-3' 
        placeholder="Email" 
        required
      />
      
      <input onChange={(e)=>setPassword(e.target.value)} value={password}
        type="password" 
        className='w-100 px-3 py-2 border border-dark mb-3' 
        placeholder="Password" 
        required
      />

      <div className='w-100 d-flex justify-content-between small mt-1 mb-3'>
        <p className="text-decoration-underline m-0" style={{ cursor: 'pointer' }}>Forgot your password?</p>
        {
          currentState === 'Login'
          ? <p onClick={() => setCurrentState('Sign Up')} className="text-decoration-underline m-0" style={{ cursor: 'pointer' }}>Create an Account</p>
          : <p onClick={() => setCurrentState('Login')} className="text-decoration-underline m-0" style={{ cursor: 'pointer' }}>Login Here</p>
        }
      </div>
      
      <button className="bg-dark text-white fw-light px-5 py-2 w-100">
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>     
  );
}

export default Login;