import React from 'react'
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

function Navbar(props) {
  return (
      <div className= "nav-bar">
      <Link className= "nav-bar-link" to="/posts">
      Posts
      </Link>
      <Link className= "nav-bar-link" to="/login">
      Login
      </Link>
      <Link className= "nav-bar-link" to="/register">
      Register
      </Link>
      </div>
  )
}

export default Navbar;