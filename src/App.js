import './App.css';
import React from 'react';
import Menu from './Menu';
import WhoIAm from './WhoIAm';
import Header from './Header';
import Homepage from './Homepage';
import WhatIveDone from './WhatIveDone';
import ContactForm from './ContactForm';

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

function WiD() {
	pageSwap()
	return <div className="page">
				<WhatIveDone />
			</div>
}

function About() {
	pageSwap()
	return <div className="page">
				<WhoIAm />
			</div>
}

function ContactMe() {
	pageSwap()
	return <div className="page">
				<ContactForm />
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
			<Header />
			{/* A <Switch> looks through its children <Route>s and
			renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/contact-me">
					<ContactMe />
				</Route>
				<Route path="/who-i-am">
					<About />
				</Route>
				<Route path="/what-ive-done">
					<WiD />
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
