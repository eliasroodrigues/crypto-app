import React from 'react';

function Coin({ name, icon, price, symbol }) {
	return (
		<div>
			<h1>{name}</h1>
			<img src={icon} alt={name} />
			<h3>Price: {price}</h3>
			<h3>Symbol: {symbol}</h3>
		</div>
	)
}

export default Coin;