import React from 'react';
import './Header.css';
import Menu from './Menu';
import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <header>
    	<div className="content">
	    	<div id="logo_container">
          <Link to="/">
  		    	<span>SimonCreates</span>
  		    	<span>.online</span>
          </Link>
	    	</div>
	    	<Menu.desktop />
    	</div>
    </header>
  );
}

export default Header;
