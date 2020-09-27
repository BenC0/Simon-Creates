import './Homepage.css';
import React from 'react';
import Hero from './Hero';
import Villian from './Villian';
import ImageWithText from './ImageWithText';
import ImageSection from './ImageSection';
import ClientBanner from './ClientBanner';
import ContactForm from './ContactForm';

function Homepage() {
	const imgUrlBase = `${window.location.origin}/images/`
	let ImageWithTextContent1 = {
		"link": "#",
		"highlight": "highlight-3",
		"title": "What I've Done",
		"imageSrc": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
		"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work."
	}
	let ImageWithTextContent2 = {
		"link": "#",
		"highlight": "gradient",
		"title": "Case Studies",
		"imageSrc": `${imgUrlBase}A4_Brochure_Mockup_7.png`,
		"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work."
	}
	let SimonProfile = {
		"imageSrc": `${imgUrlBase}Simon-Profile.jpeg`,
		"alt": "Simon Cohen",
		"extraClass": "hidden-on-d"
	}
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
		<ImageSection image={SimonProfile} />,
		<ClientBanner />,
		<ImageWithText content={ImageWithTextContent1} />,
		<ImageWithText content={ImageWithTextContent2} />,
		<ImageSection image={SimonProfile} />,
		<Villian />,
		<ContactForm />
	]
}

export default Homepage;
