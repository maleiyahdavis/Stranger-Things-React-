import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { getPosts } from './api';
import axios from 'axios'; 
import {getToken} from './auth'
import {BrowserRouter as Router, 
        Route, 
        Switch, 
        Redirect} from "react-router-dom"

import {Posts, Navbar, Register, Login} from './components';

const App = ()=> {
const [allPosts, setAllPosts] = useState([]);

const fetchAllPosts = async () =>{
  try {
    const myToken = getToken()

    const {data} = await axios.get ("https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT/posts",{
      headers: {
        "auth-token": myToken, 
      }, 
    })
  
    
    setAllPosts(data.data.posts)  
  } catch (error) {
    console.log(error);
  }
}
useEffect (()=>{
  fetchAllPosts(); 
}, [])

  return(
    <div id="App">
      <h1>Stranger's Things</h1>
      <Navbar />
      <Switch>
      <Route exact path="/posts"><Posts allPosts= {allPosts} /></Route>
      <Route path="/register"><Register/></Route>
      <Route path="/login"><Login/></Route>
      </Switch>
      </div>

  )
}

ReactDOM.render(
  <Router>
        <App/>
  </Router>,

  document.getElementById('app'),
);
