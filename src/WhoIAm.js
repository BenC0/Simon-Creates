import React from 'react';
import Hero from './Hero';
import History from './History';
import Toolkit from './Toolkit';
import Experience from './Experience';
import ContactForm from './ContactForm';
import ClientBanner from './ClientBanner';

function WhatIveDone() {
	const imgUrlBase = `${window.location.origin}/images/`
	let HeroContent = {
		"title": "Simon Cohen",
		"subtitle": false,
		"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.",
		"image": {
			"imageSrc": `${imgUrlBase}Simon-Profile-Desktop.jpeg`,
			"alt": "Simon Cohen"
		}
	}

	return [
		<Hero content={HeroContent}/>,
		<ClientBanner />,
		<History />,
		<Experience />,
		<Toolkit />,
		<ContactForm />,
	]
}

export default WhatIveDone;
