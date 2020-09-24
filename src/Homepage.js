import './Homepage.css';
import React from 'react';
import Hero from './Hero';
import Villian from './Villian';
import ImageWithText from './ImageWithText';
import ImageSection from './ImageSection';
import ClientBanner from './ClientBanner';

function Homepage() {
	const imgUrlBase = `${window.location.origin}/images/`
	const iMacPlaceHolerImage = `${imgUrlBase}iMac-Pro-Mockup1_768px.png`
	const brochurePlaceHolerImage = `${imgUrlBase}A4_Brochure_Mockup_7.png`
	const simonProfileImg = `${imgUrlBase}Simon-Profile.jpeg`

	let ImageWithTextContent1 = {
		"link": "#",
		"highlight": "highlight-3",
		"title": "What I've Done",
		"imageSrc": iMacPlaceHolerImage,
		"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work."
	}
	let ImageWithTextContent2 = {
		"link": "#",
		"highlight": "gradient",
		"title": "Case Studies",
		"imageSrc": brochurePlaceHolerImage,
		"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work."
	}
	let SimonProfile = {
		"imageSrc": simonProfileImg,
		"alt": "Simon Cohen",
		"extraClass": "hidden-on-d"
	}
	return [
		<Hero />,
		<ImageSection image={SimonProfile} />,
		<ClientBanner />,
		<ImageWithText content={ImageWithTextContent1} />,
		<ImageWithText content={ImageWithTextContent2} />,
		<ImageSection image={SimonProfile} />,
		<Villian />
	]
}

export default Homepage;
