import './Homepage.css';
import React from 'react';
import Hero from './Hero';
import ImageWithText from './ImageWithText';
import ContactForm from './ContactForm';

function Homepage() {
	let ImageWithTextContent = {
		"title": "Simon Cohen",
		"imageSrc": `${window.location.href}images/Simon-Placeholder.jpg`,
		"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work. <br />With continually growing interests in: advertising, psychology, health, fitness, human behaviour and new technology."
	}
	return [
		<Hero />,
		<section className="introContent">
			<ImageWithText content={ImageWithTextContent} />
		</section>,
		<section>
			<ContactForm />
		</section>
	]
}

export default Homepage;
