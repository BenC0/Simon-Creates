import './App.css';
import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Menu from './Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function pageSwap() {
    document.body.classList.remove('nav-active')
}

function Home() {
	pageSwap()
	return <div className="page">
				<Homepage />
			</div>
}

function WhatIveDone() {
	pageSwap()
	return <div className="page">
				<Homepage />
			</div>
}

function WhoIAm() {
	pageSwap()
	return <div className="page">
				<Homepage />
			</div>
}

function ContactMe() {
	pageSwap()
	return <div className="page">
				<Homepage />
			</div>
}

function App() {
	return [
		<Router>
			<nav>
				<ul>
					<li key="what-ive-done-link">
						<Link to="/what-ive-done">What I've done</Link>
					</li>
					<li key="who-i-am-link">
						<Link to="/who-i-am">Who I am</Link>
					</li>
					<li key="contact-me-link">
						<Link to="/contact-me">Contact me</Link>
					</li>
				</ul>
			</nav>
			<Header />,
			{/* A <Switch> looks through its children <Route>s and
			renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/contact-me">
					<ContactMe />
				</Route>
				<Route path="/who-i-am">
					<WhoIAm />
				</Route>
				<Route path="/what-ive-done">
					<WhatIveDone />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>,
	    <Menu.mobile />,
	];
}

export default App;
