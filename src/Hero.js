import React from 'react';
import './Hero.css';

function Hero(props) {
	let title = <h1>{props.content.title}</h1>
	if (props.content.subtitle !== false) {
		title = <h1>{props.content.title}<span className="subheading">{props.content.subtitle}</span></h1>
	}
	return [
		<section id="hero">
			<div  className="content grid-12">
				<div className="copy d-span-5 m-span-4 m-offset-4">
					{title}
					<p>{props.content.copy}</p>
				</div>
				<div className="hidden-on-m hero-image-container d-span-6 d-offset-7">
					<img src={props.content.image.imageSrc} alt={props.content.image.alt} />
				</div>
			</div>
		</section>
	];
}

export default Hero;
