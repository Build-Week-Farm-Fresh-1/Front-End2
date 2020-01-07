import React from 'react';
import {Link} from 'react-router-dom';

const ShopperGoBackButton = () => (
    <div className='go-back-container'>
		<i className="fas fa-arrow-left"></i>
		<Link to='/shopper/dashboard'>go back</Link>
	</div>
);

export default ShopperGoBackButton;