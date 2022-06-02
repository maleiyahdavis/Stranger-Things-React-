import React, {useState} from 'react';
import { loginUser } from '../api';
import { storeToken, storeUser } from '../auth';

function Login({setIsLoggedIn}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className= "auth-comp-main" >
      <h2>Login</h2>
      <form
        id="login"
        onSubmit={async (event)=>{
          event.preventDefault();
          try {
            const {data} = await loginUser(username, password)
            storeToken(token)
            storeUser(username);

            setUsername("");
            setPassword("");
          } catch (error) {
            console.log(error.response.data); 
          }
        }}
      >
        <fieldset className= "auth-comp-input">
          <label htmlFor='username'>Username</label>
          <input id="username" type="text" placeholder='enter username' value={username} onChange={(event)=>{
              console.log(event.target.value); 
              setUsername(event.target.value); 
          }}></input>
        </fieldset>
        <fieldset className= "auth-comp-input">
          <label htmlFor='password'>Password</label>
          <input id="password" type="password" placeholder="enter password" value={password} onChange={(event)=>{
              console.log(event.target.value); 
              setPassword(event.target.value); 
          }}></input>
        </fieldset>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;
