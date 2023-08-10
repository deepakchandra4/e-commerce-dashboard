import React, { useState } from 'react'

const SignUp = () => {
    const [name , setName] = useState("");
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const collectData = () => {
        console.warn(name , email , password)
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
