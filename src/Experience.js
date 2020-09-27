import React from 'react';
import './Experience.css';
import IconList from './IconList';

function Experience() {
	const sampleSVG = <svg enable-background="new 0 0 511.003 511.003" viewBox="0 0 511.003 511.003" xmlns="http://www.w3.org/2000/svg"><g><path d="m510.552 51.365c-8.538-34.151-8.108-33.607-9.919-36.439-.857-1.334-1.88-2.478-3.033-3.439-3.494-2.924-4.482-2.665-37.962-11.035-8.026-2.008-16.181 2.877-18.189 10.914-2.01 8.036 2.877 16.181 10.914 18.189l6.298 1.575-40.458 40.458c-42.953-32.682-105.33-30.191-145.517 9.996l-17.684 17.678-17.676-17.676c-34.173-34.173-86.024-42.359-129.025-20.368-6.083 3.111-9.296 9.939-7.813 16.608l6.758 30.419-30.521-6.785c-6.648-1.48-13.459 1.708-16.583 7.761-21.374 41.393-15.112 94.025 20.202 129.339l85.443 85.443-61 61h-61.787c-23.71 0-43 19.29-43 43 0 22.735 17.735 41.405 40.097 42.903 1.498 22.361 20.168 40.097 42.903 40.097 23.71 0 43-19.29 43-43v-61.787l61-61 57.394 57.394c5.855 5.857 15.353 5.859 21.213.001 4.2-4.2 174.079-174.08 164.05-164.051 39.723-39.722 42.98-102.306 9.784-145.784l40.433-40.433 1.575 6.298c2.002 8.013 10.132 12.932 18.189 10.914 8.037-2.009 12.924-10.154 10.914-18.19zm-414.552 416.638c0 7.168-5.832 13-13 13s-13-5.832-13-13v-12c0-8.284-6.716-15-15-15h-12c-7.168 0-13-5.832-13-13s5.832-13 13-13h53zm312.443-250.656c-.1 0 4.606-4.595-153.443 153.443l-153.443-153.443c-22.679-22.68-29.132-55.377-19.237-83.91l41.426 9.209c10.7 2.378 20.277-7.184 17.897-17.896l-9.176-41.302c28.996-10.033 61.435-2.859 83.646 19.351l28.28 28.28c5.856 5.856 15.353 5.858 21.211.002l28.292-28.282c28.126-28.126 71.476-31.119 102.813-9.719l-97.454 97.454c-7.25-4.901-15.37-8.634-24.098-10.932-8.019-2.112-16.216 2.677-18.325 10.687-2.109 8.012 2.676 16.216 10.687 18.325 17.028 4.482 30.631 18.007 35.003 35.386 2.017 8.021 10.156 12.911 18.206 10.888 8.034-2.021 12.908-10.172 10.888-18.206-2.274-9.041-6.093-17.443-11.153-24.929l97.487-97.487c21.646 31.529 18.491 75.083-9.507 103.081z"/></g></svg>
	let exp = [
		{
			"icon": sampleSVG,
			"name": "Marketing & Advertising"
		},
		{
			"icon": sampleSVG,
			"name": "Presentation Decks (Concept & Design)"
		},
		{
			"icon": sampleSVG,
			"name": "Exhibitions & Events"
		},
		{
			"icon": sampleSVG,
			"name": "Large Format Artwork & Printing"
		},
		{
			"icon": sampleSVG,
			"name": "Monthly Retail POS Production"
		},
		{
			"icon": sampleSVG,
			"name": "Social Media Campaigns"
		},
		{
			"icon": sampleSVG,
			"name": "Bi-Monthly Magazine Design & Artwork"
		},
		{
			"icon": sampleSVG,
			"name": "Color Correction & Optimisation"
		},
		{
			"icon": sampleSVG,
			"name": "Photographic Retouching"
		},
		{
			"icon": sampleSVG,
			"name": "Template Design & Production"
		},
		{
			"icon": sampleSVG,
			"name": "Creative Cloud Library Management"
		}
	]
	let c = {
		"list": exp,
		"title": "My experience"
	}
	return (
        <section id="Experience" highlight="gradient-flipped">
			<IconList content={c} />
		</section>
	);
}

export default Experience;
