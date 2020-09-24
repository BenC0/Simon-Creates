import React from 'react';
import './ImageWithText.css';

function ImageWithText(props) {
	console.log(props.content)
	let copy = []
	props.content.copy.split('<br />').forEach(paragraph => {
		copy.push(<p>{paragraph}</p>)
	})

	return [
		<section className="imageWithText" highlight={props.content.highlight}>
			<div class="content">
				<div class="image-container">
					<img className="imageHolder"
						src={props.content.imageSrc}
						alt={props.content.title}
					/>
				</div>
				<div class="copy">
					<h2>{props.content.title}</h2>
					<p>{copy}</p>
					<a href={props.content.link} className="cta">See More</a>
				</div>
			</div>
		</section>
	]
}

export default ImageWithText;
