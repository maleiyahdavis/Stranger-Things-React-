import React, {useState} from 'react'
import {registerUser} from '../api'; 
import {storeToken} from "../auth"; 

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className= "auth-comp-main" >
      <h2>Register</h2>
      <form
        id="register"
        onSubmit={async (event)=>{
          event.preventDefault();
          try {
            const {data} = await registerUser(username, password)
            storeToken(token)
            setIsLoggedIn(true); 

            setUsername("");
            setPassword("");
          } catch (error) {
            console.log(error); 
          }
        }}
      >
        <fieldset className= "auth-comp-input">
          <label htmlFor='username'>Username</label>
          <input id="username" type="text" placeholder="enter username" value={username} onChange={(event)=>{
              console.log(event.target.value); 
              setUsername(event.target.value); 
          }}></input>
        </fieldset>
        <fieldset className= "auth-comp-input">
          <label htmlFor='password'>Password</label>
          <input id="password" type="text" placeholder='enter password' value={password} onChange={(event)=>{
              console.log(event.target.value); 
              setPassword(event.target.value); 
          }}></input>
        </fieldset>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register;
