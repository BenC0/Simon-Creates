import React from 'react';
import './Hero.css';

function Hero() {
	const imgUrlBase = `${window.location.origin}/images/`
	const simonProfileImg = `${imgUrlBase}Simon-Profile-Desktop.jpeg`
	let SimonProfile = {
		"imageSrc": simonProfileImg,
		"alt": "Simon Cohen"
	}

	return [
		<section id="hero">
			<div  className="content grid-12">
				<div className="copy span-5">
					<h1>Simon Cohen</h1>
					<p>Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.</p>
				</div>
				<div className="hidden-on-m hero-image-container span-5 offset-8">
					<img src={SimonProfile.imageSrc} alt={SimonProfile.alt} />
				</div>
			</div>
		</section>
	];
}

export default Hero;
