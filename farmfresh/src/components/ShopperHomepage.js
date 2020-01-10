import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FarmerInventory from "./FarmerInventory";
import EditForm from "./EditForm";
import { getIn } from 'formik';
import Item from './Item';


const ShopperHomepage = (props) => {
	const [inventory, setInventory] = useState([]);

	const getInventory = e => {
		e.preventDefault();
		const id = localStorage.getItem('id');
		   axiosWithAuth().get(`/farmers/${id}/inventory/`)
		   .then(res=> {
			   console.log(res);
			   setInventory(res.data);
		   })
		   .catch(err=> console.log("error!"))
	};

	


	return (
		<div>
			<h1> Your Farmer Inventory</h1>
			{console.log(inventory.SKU)}
			<button onClick={getInventory}>Get Inventory</button>
			<div className="inventory">
				{console.log("Inventory", inventory)}
				{inventory.map(item => {
					return (

						
						<FarmerInventory
						key={item.SKU}
						name={item.name}
						price={item.price}
						pic={item.produceImgURL}
						farmerID={item.farmer_id}
						SKU={item.SKU}
						PLU={item.PLU}
						quantity={item.quantity}
						increment={item.increment}
						/>
					)
				})}
				</div>
		</div>
	);
};

export default ShopperHomepage;
