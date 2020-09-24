import React from 'react';
import './Hero.css';
import ImageSection from './ImageSection';

function Hero() {
	const imgUrlBase = `${window.location.href}images/`
	const simonProfileImg = `${imgUrlBase}Simon-Profile.jpeg`
	let SimonProfile = {
		"imageSrc": simonProfileImg,
		"alt": "Simon Cohen"
	}

	return [
		<section id="hero">
			<div className="content">
				<div className="copy">
					<h1>Simon Cohen</h1>
					<p>Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.</p>
				</div>
				<div className="hidden-on-m hero-image-container">
					<img src={SimonProfile.imageSrc} alt={SimonProfile.alt} />
				</div>
			</div>
		</section>
	];
}

export default Hero;
