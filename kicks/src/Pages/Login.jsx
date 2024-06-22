import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [state, setState]  = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async(e) =>{
    e.preventDefault();
    try{
    const responseData=await fetch('http://localhost:4000/login', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
        },
        body: JSON.stringify(formData),
      });
      // .then((response)=> response.json()).then((data)=>{
      //   responseData=data
      if(!responseData.ok){
        const error = await response.json();
        throw new Error(`Error: ${error.message}`);
      }
      const dataApi = await responseData.json();
      console.log('login resonse:',dataApi);

      if (dataApi) {
        localStorage.setItem('auth-token', dataApi.token);
        console.log('Token stored:',localStorage.getItem('auth-token'));
        navigate("/");
      } else {
        alert("login failed: " + (responseData.error || responseData.errors));
      }
    }
    catch(error){
      console.error("Error during login:" , error);
    }
  
  };

  const signup = async(e) =>{
    e.preventDefault();
    try{
   
    const responseData=await fetch('http://localhost:4000/signup', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      // .then((response)=> response.json()).then((data)=>responseData = data)

      const dataApi = await responseData.json();
      console.log('Signup resposne:',dataApi);
      if (dataApi) {
        localStorage.setItem('auth-token', dataApi.token);
        console.log('Token stored:',localStorage.getItem('auth-token'));
        navigate("/");
      } else {
        alert("login failed: " + (responseData.error || responseData.errors));
      }
    }
    catch(error){
      console.error('Error duing signup:',error);
    }
}

  return (
    <div className='w-full h-full bg-slate-200 pt-16 pb-16 '>
      <div className='w-580px h-200px bg-white m-auto py-8 px-14 mb-5'>
        <h1 className='my-5 mx-0 '>{state}</h1>
        <div className='flex flex-col gap-7 mt-5'>
          {state==="Sign Up"?<input name='username'value={formData.username} onChange={changeHandler} className='h-16 w-full pl-5 border border-solid border-slate-100 outline-none text-zinc-600 text-lg' type='text' placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} className='h-16 w-full pl-5 border border-solid border-slate-100 outline-none text-zinc-600 text-lg' type='email' placeholder='Your Email' />
          <input name='password' value={formData.password} onChange={changeHandler} className='h-16 w-full pl-5 border border-solid border-slate-100 outline-none text-zinc-600 text-lg' type='password' placeholder='Password' />
        </div>
        <button onClick={(e)=>{state==="Login"?login(e):signup(e)}} className='w-500px h-12 text-white bg-red-600 border-none text-2xl font-medium cursor-pointer'>Continue</button>
        {state==="Sign Up"?
        <p className='mt-5 text-zinc-600 text-lg font-medium'>Already have an Account? <span onClick={()=>{setState("Login")}} className='text-red-500 font-semibold'>Login here</span> </p>
        :<p className='mt-5 text-zinc-600 text-lg font-medium'>Create an Account? <span onClick={()=>{setState("Sign Up")}} className='text-red-500 font-semibold'>Click here</span> </p>
        }
        
        <div className='flex items-center mt-6 gap-5 text-lg text-zinc-600 font-medium'>
          <input type='checkbox' name='' id='' />
          <p>I agree to terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Login