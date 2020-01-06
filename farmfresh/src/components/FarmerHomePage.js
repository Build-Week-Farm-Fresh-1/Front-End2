import React from 'react';
import {Link} from 'react-router-dom';
import HeaderWithLogOut from './HeaderWithLogOut';

const FarmerHomepage = () => {
	return (
		<div>
			<HeaderWithLogOut/>
			<div className='homepage-container'>
				<div className='homepage-row'>
					<Link to='#'><button>View Orders</button></Link>
					<Link to='/farmer/inventory'><button>Add/Edit Inventory</button></Link>
				</div>
				<div className='homepage-row'>
					<Link to='#'><button>Add Upcoming Harvests</button></Link>
					<Link to='/farmer/profile'><button>Farm Profile</button></Link>
				</div>
			</div>
		</div>
	);
};

export default FarmerHomepage;