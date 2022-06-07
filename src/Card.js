// import { render } from '@testing-library/react';
import React from 'react';
import './card.css';

const Card = ({ name, email, id }) => {
	return(
		<div className="card">
			<img alt="robots" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;