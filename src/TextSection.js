import React from 'react';

function TextSection(props) {
	let copy = []
	props.content.copy.split('<br />').forEach(paragraph => {
		copy.push(<p>{paragraph}</p>)
	})

	return [
		<section className="textSection" highlight={props.content.highlight}>
			<div class="content">
				<h2>{props.content.title}</h2>
				<p>{copy}</p>
			</div>
		</section>
	]
}

export default TextSection;
