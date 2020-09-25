import React from 'react';
import ClientBanner from './ClientBanner';
import CaseStudy from './CaseStudy';

function WhatIveDone() {
	const imgUrlBase = `${window.location.origin}/images/`

	let exampleCaseStudy1 = {
		"highlight": "gradient",
		"client": "Westminster Russia Forum",
		"project": "Sales brochure",
		"excerpt": "The brief was to create a sales document that was to be used to target potential companies to advertise on",
		"image":  {
			"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
			"alt": "Westminster Russia Forum"
		},
		"modal": {
			"slides": [
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				}
			]
		}
	}
	let exampleCaseStudy2 = {
		"highlight": "b-b-gradient",
		"client": "Westminster Russia Forum",
		"project": "Sales brochure",
		"excerpt": "The brief was to create a sales document that was to be used to target potential companies to advertise on",
		"image":  {
			"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
			"alt": "Westminster Russia Forum"
		},
		"modal": {
			"slides": [
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				}
			]
		}
	}
	let exampleCaseStudy3 = {
		"highlight": "image",
		"client": "Westminster Russia Forum",
		"project": "Sales brochure",
		"excerpt": "The brief was to create a sales document that was to be used to target potential companies to advertise on",
		"image":  {
			"src": `${imgUrlBase}sample-case-study-image.png`,
			"alt": "Westminster Russia Forum"
		},
		"modal": {
			"slides": [
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				}
			]
		}
	}
	let exampleCaseStudy4 = {
		"highlight": "gradient",
		"client": "Westminster Russia Forum",
		"project": "Sales brochure",
		"excerpt": "The brief was to create a sales document that was to be used to target potential companies to advertise on",
		"image":  {
			"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
			"alt": "Westminster Russia Forum"
		},
		"modal": {
			"slides": [
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				}
			]
		}
	}
	let exampleCaseStudy5 = {
		"highlight": "image",
		"client": "Westminster Russia Forum",
		"project": "Sales brochure",
		"excerpt": "The brief was to create a sales document that was to be used to target potential companies to advertise on",
		"image":  {
			"src": `${imgUrlBase}sample-case-study-image.png`,
			"alt": "Westminster Russia Forum"
		},
		"modal": {
			"slides": [
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				}
			]
		}
	}
	let exampleCaseStudy6 = {
		"highlight": "g-g-gradient",
		"client": "Westminster Russia Forum",
		"project": "Sales brochure",
		"excerpt": "The brief was to create a sales document that was to be used to target potential companies to advertise on",
		"image":  {
			"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
			"alt": "Westminster Russia Forum"
		},
		"modal": {
			"slides": [
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				}
			]
		}
	}
	let exampleCaseStudy7 = {
		"highlight": "image",
		"client": "Westminster Russia Forum",
		"project": "Sales brochure",
		"excerpt": "The brief was to create a sales document that was to be used to target potential companies to advertise on",
		"image":  {
			"src": `${imgUrlBase}sample-case-study-image.png`,
			"alt": "Westminster Russia Forum"
		},
		"modal": {
			"slides": [
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				}
			]
		}
	}
	let exampleCaseStudy8 = {
		"highlight": "highlight-3",
		"client": "Westminster Russia Forum",
		"project": "Sales brochure",
		"excerpt": "The brief was to create a sales document that was to be used to target potential companies to advertise on",
		"image":  {
			"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
			"alt": "Westminster Russia Forum"
		},
		"modal": {
			"slides": [
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				},
				{
					"title": "Simon Cohen",
					"copy": "Highly creative, passionate and empathetic, who aims to always take a human centric approach to his work.<br />With continually growing interests in advertising, psychology, health, fitness, human behaviour and new technology.",
					"image": {
						"src": `${imgUrlBase}iMac-Pro-Mockup1_768px.png`,
						"alt": "Westminster Russia Forum"
					}
				}
			]
		}
	}

	return [
		<CaseStudy project={exampleCaseStudy1} />,
		<ClientBanner />,
		<CaseStudy project={exampleCaseStudy2} />,
		<CaseStudy project={exampleCaseStudy3} />,
		<CaseStudy project={exampleCaseStudy4} />,
		<CaseStudy project={exampleCaseStudy5} />,
		<CaseStudy project={exampleCaseStudy6} />,
		<CaseStudy project={exampleCaseStudy7} />,
		<CaseStudy project={exampleCaseStudy8} />,
	]
}

export default WhatIveDone;
