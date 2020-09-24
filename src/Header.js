import React from 'react';
import './Header.css';
import Menu from './Menu';

function Header() {
  return (
    <header>
    	<div className="content">
	    	<div id="logo_container">
		    	<span>SimonCreates</span>
		    	<span>.online</span>
	    	</div>
	    	<Menu.desktop />
    	</div>
    </header>
  );
}

export default Header;
