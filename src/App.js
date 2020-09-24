import './App.css';
import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Menu from './Menu';

function App() {
	return [
		<Header />,
		<Menu.mobile />,
		<Homepage />,
	];
}

export default App;
