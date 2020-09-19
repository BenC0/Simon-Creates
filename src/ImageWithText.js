import React from 'react';
import './ImageWithText.css';

function ImageWithText(props) {
	console.log(props.content)
	let copy = []
	props.content.copy.split('<br />').forEach(paragraph => {
		copy.push(<p>{paragraph}</p>)
	})

	return [
		<div className="imageWithText">
			<div class="image-container">
				<img className="imageHolder"
					src={props.content.imageSrc}
					alt={props.content.title}
				/>
			</div>
			<div class="copy">
				<h2>{props.content.title}</h2>
				<p>{copy}</p>
			</div>
		</div>
	]
}

export default ImageWithText;
