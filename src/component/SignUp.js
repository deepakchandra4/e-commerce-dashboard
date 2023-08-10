import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name , setName] = useState("");
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
    const navigate = useNavigate();

    const handleChangeName = (e) => {
        setName(e.target.value);
       
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const collectData = async () => {
        setName('');
        setEmail('');
        setPassword('');
        console.warn(name , email , password);
        let result = await fetch('http://localhost:4000/register' , {
          method:"POST",
          body: JSON.stringify({name,email,password}),
          headers: {
            'Content-Type':'application/json'
          },
        });
        result = await result.json();
        console.warn(result);
        if(result){
          navigate('/register');
        }
    }

  return (
    <div className="register">
      <h1>Register</h1>
      <input className="inputBox" type="text" placeholder="Enter Name" value={name}  onChange={handleChangeName} />
      <input className="inputBox" type="email" placeholder="Enter Email" value={email} onChange={handleChangeEmail} />
      <input className="inputBox" type="password" placeholder="Enter Password" value={password} onChange={handleChangePassword}/>
      <button onClick={collectData} className='appButton' type="button">Sign Up</button>
    </div>
  )
}

export default SignUp
