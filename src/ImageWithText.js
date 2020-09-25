import React from 'react';
import './ImageWithText.css';

function ImageWithText(props) {
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
			<div className="content grid-12">
				<div className="image-container d-span-6 d-offset-7 row-1 m-span-12">
					<img className="imageHolder"
						src={props.content.imageSrc}
						alt={props.content.title}
					/>
				</div>
				<div className="copy d-span-5 offset-1 d-row-1 m-span-12 m-row-2">
					<h2>{props.content.title}</h2>
					{copy}
					<a href={props.content.link} className="cta">See More</a>
				</div>
			</div>
		</section>
	]
}

export default ImageWithText;
