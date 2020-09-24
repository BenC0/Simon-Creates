import './ImageSection.css';
import React from 'react';

function ImageSection(props) {
	return [
		<section className={props.image.extraClass.concat(" full-width-image")}>
			<img src={props.image.imageSrc} alt={props.image.alt} />
		</section>
	];
}

export default ImageSection;
