import './Homepage.css';
import React from 'react';
import Hero from './Hero';
import ImageWithText from './ImageWithText';
import ImageSection from './ImageSection';
import TextSection from './TextSection';
import ContactForm from './ContactForm';
import ClientBanner from './ClientBanner';

const placeHolderImage = `${window.location.href}images/Simon-Placeholder.jpg`

function Homepage() {
	let ImageWithTextContent1 = {
		"highlight": "highlight-3",
		"title": "What I've Done",
		"imageSrc": placeHolderImage,
		"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work."
	}
	let ImageWithTextContent2 = {
		"highlight": "gradient",
		"title": "Case Studies",
		"imageSrc": placeHolderImage,
		"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work."
	}
	let TextContent3 = {
		"highlight": "white",
		"title": "All about me",
		"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work."
	}
	return [
		<Hero />,
		<ImageSection imageSrc={placeHolderImage} />,
		<ClientBanner />,
		<ImageWithText content={ImageWithTextContent1} />,
		<ImageWithText content={ImageWithTextContent2} />,
		<ImageSection imageSrc={placeHolderImage} />,
		<TextSection content={TextContent3} />,
		<ContactForm />
	]
}

export default Homepage;
