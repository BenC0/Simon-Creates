import React from 'react';
import './History.css';

export function Job(props) {
	let company = props.content.company
	let companyNotBlank = company !== ""
	let titleNotBlank = props.content.title !== ""
	if (companyNotBlank && titleNotBlank) {
		company = company.concat(' - ') 
	}
	return (
		<div className="d-span-4 t-span-6 m-span-12 historyItem grid-12">
			<span className="year span-12 row-1">{props.content.year}</span>
			<div className="span-12 row-2">
				<span className="company">{company}</span><span className="title">{props.content.title}</span>
			</div>
		</div>
	)
}

function History() {
	let js = [
		{
			"year": "2018",
			"title": "Creative Artworker",
			"company": "BD Network"
		},
		{
			"year": "2017",
			"title": "Creative Artworker",
			"company": "TBK Agency"
		},
		{
			"year": "2016",
			"title": "Freelance Designer",
			"company": ""
		},
		{
			"year": "2015",
			"title": "Freelance Designer",
			"company": "Adecco - Contracted to Google"
		},
		{
			"year": "2013",
			"title": "Image Line Marketing Agency",
			"company": "BD Network"
		},
		{
			"year": "2013",
			"title": "Freelance Designer",
			"company": ""
		},
		{
			"year": "2012",
			"title": "",
			"company": "SIM Imaging"
		},
	]
	let historyItems = []
	js.forEach(j => {
		historyItems.push(<Job content={j} />)
	})
	return (
		<section id="History" highlight="dark-blue">
			<div className="content grid-12">
				<div className="span-12">
					<h2>My history</h2>
				</div>
				{historyItems}
			</div>
		</section>
	);
}

export default History;
