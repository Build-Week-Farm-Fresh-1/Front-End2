import React from 'react';
import {Link} from 'react-router-dom';

const FarmerGoBackButton = () => (
    <div className='go-back-container'>
		<i className="fas fa-arrow-left"></i>
		<Link to='/farmer/dashboard'>go back</Link>
	</div>
);

export default FarmerGoBackButton;