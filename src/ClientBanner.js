import React from 'react';
import './ClientBanner.css';

const Clients = [
	{
		name: "Google"
	},
	{
		name: "Odeon"
	},
	{
		name: "Nintendo"
	},
	{
		name: "Virgin Media"
	},
	{
		name: "Lurpak"
	},
	{
		name: "Cadbury"
	}
]

function ClientEl(props) {
	return (
		<span>{props.client.name}</span>
	)
}

function ClientBanner() {
	let clientEls = []
	Clients.forEach(client => {
		clientEls.push(<ClientEl client={client}/>)
	})
	return (
		<section id="clientBanner">
			<div className="content">
				{ clientEls }
			</div>
		</section>
	);
}

export default ClientBanner;
