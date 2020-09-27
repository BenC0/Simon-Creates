import React from 'react';
import './IconList.css';

export function IconListItem(props) {
	return (
		<div className="d-span-4 t-span-6 m-span-12 ToolkitItem iconListItem">
			<span className="icon">{props.content.icon}</span>
			<span className="name">{props.content.name}</span>
		</div>
	)
}

function iconList(props) {
	let listItems = []
	console.log(props.content.list)
	props.content.list.forEach(j => {
		console.log(j)
		listItems.push(<IconListItem content={j} />)
	})
	return (
		<div className="iconList content grid-12">
			<div className="span-12">
				<h2>{props.content.title}</h2>
			</div>
			{listItems}
		</div>
	);
}

export default iconList;
