import React from 'react';

import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  NavLink
} from "react-router-dom"; 

// import Gallery from './Gallery'

function Nav(props) {

  return (
    
    <nav className="main-nav">
      <ul>
          <li><NavLink to='/Cats'>Cats</NavLink></li>
          <li><NavLink to='/Dogs'>Dogs</NavLink></li>
          <li><NavLink to='/Birds'>Birds</NavLink></li>
          <li><NavLink to='/Hamster'>Hamster</NavLink></li>
          <li><NavLink to='/Dolphins'>Dolphins</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;