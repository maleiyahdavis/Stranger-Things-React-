import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { getPosts } from './api';
import axios from 'axios'; 
//import {getToken} from './auth'
import {BrowserRouter as Router, 
        Route, 
        Switch, 
        Redirect} from "react-router-dom"

import {Posts, Navbar, Register, Login, Newposts} from './components';

const App = ()=> {
const [allPosts, setAllPosts] = useState([]);

const fetchAllPosts = async () =>{
  try {
    //const myToken = getToken()

    const {data} = await axios.get ("https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT/posts",{
      headers: {
        "auth-token": "xyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9.CTj4owBl0PB-G6G4E_1l6DS6_cVc0iKcMzBIWFUYM1p", 
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
      <Route exact path="/posts"><Posts allPosts= {allPosts} />
      <Newposts setAllPosts={setAllPosts} allPosts={allPosts}/>
      </Route>
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
