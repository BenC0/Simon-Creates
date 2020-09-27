import React from 'react';
import WufooForm from 'react-wufoo-embed';

function ContactForm(props) {
	const imageSrc = `${window.location.origin}/images/iMac-Pro-Mockup1_768px.png`
	return [
		<section className="ContactForm">
			<div className="content grid-12">
				<div className="d-span-6 m-span-12 row-1">
					{/*<WufooForm userName="simoncreates" formHash="z3jpg7j17ef8h7" header="hide" />*/}
				</div>
				<div className="d-span-6 hidden-on-m row-1">
					<img src={imageSrc} alt="Contact me" />
				</div>
			</div>
		</section>
	]
}

export default ContactForm;
