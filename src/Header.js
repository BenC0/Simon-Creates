import React from 'react';
import './Header.css';
import Menu from './Menu';
import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <header>
    	<div className="content grid-12">
	    	<div id="logo_container" className="span-2">
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
