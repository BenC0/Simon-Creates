import React from 'react';
import './Villian.css';

function Villian() {
	const imgUrlBase = `${window.location.href}images/`
	const simonProfileImg = `${imgUrlBase}Simon-Profile-Desktop.jpeg`
	let SimonProfile = {
		"imageSrc": simonProfileImg,
		"alt": "Simon Cohen",
		"link": "#"
	}

	return [
		<section id="villian" highlight="white">
			<div className="content grid-12">
				<div className="copy d-span-5 m-span-12">
					<h1>All about me</h1>
					<p>Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.</p>
					<a href={SimonProfile.link} className="cta">See More</a>
				</div>
				<div className="hidden-on-m villian-image-container d-span-6 d-offset-7">
					<img src={SimonProfile.imageSrc} alt={SimonProfile.alt} />
				</div>
			</div>
		</section>
	];
}

export default Villian;
