import React from 'react';
import './ImageWithText.css';

function ImageWithText(props) {
	console.log(props.content)
	let copy = []
	if (props.content.copy.indexOf('<br />') !== -1) {
		props.content.copy.split('<br />').forEach(paragraph => {
			copy.push(<p>{paragraph}</p>)
		})
	} else {
		copy.push(<p>{props.content.copy}</p>)
	}

	return [
		<section className="imageWithText" highlight={props.content.highlight}>
			<div className="content">
				<div className="image-container">
					<img className="imageHolder"
						src={props.content.imageSrc}
						alt={props.content.title}
					/>
				</div>
				<div className="copy">
					<h2>{props.content.title}</h2>
					{copy}
					<a href={props.content.link} className="cta">See More</a>
				</div>
			</div>
		</section>
	]
}

export default ImageWithText;
