import './Menu.css';
import React from 'react';

export function handleMenuClick(e) {
  let isNavActive = document.body.classList.contains('nav-active');
  if (isNavActive) {
    document.body.classList.remove('nav-active')
  } else {
    document.body.classList.add('nav-active')
  }
}

export function MobileMenu() {
  function handleClick(e) {
    e.preventDefault()
    handleMenuClick(e)
  }

  return (
    <div id="menu_container" className="hidden-on-d">
      <div id="menu_button" onClick={handleClick}>
        <svg viewBox="0 -53 384 384" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
      </div>
    </div>
  );
}

export function DesktopMenu() {
  function handleClick(e) {
    e.preventDefault()
    handleMenuClick(e)
  }

  return (
    <div id="menu_container" className="desktop hidden-on-m span-2 offset-11">
      <div id="menu_button" onClick={handleClick}>
        <svg viewBox="0 -53 384 384" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
      </div>
    </div>
  );
}


const Menu = {
	desktop: DesktopMenu,
	mobile: MobileMenu
}

export default Menu;
