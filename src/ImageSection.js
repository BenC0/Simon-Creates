import './ImageSection.css';
import React from 'react';

function ImageSection(props) {
	return [
		<section class="full-width-image">
			<img src={props.imageSrc} />
		</section>
	];
}

export default ImageSection;
