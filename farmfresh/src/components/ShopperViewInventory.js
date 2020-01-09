import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import ShopperGoBackButton from './ShopperGoBackButton';
import images from '../images.json';
import Item from "./Item";


const ShopperViewInventory = (props) => {


		// const { addItem } = useContext(CartContext);
	
		const [list, setList] = useState([]);
	
		const [cart, setCart] = useState(
			localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
		  );
		
		  useEffect(() => {
			localStorage.setItem("cart", JSON.stringify(cart));
		  }, [cart]);
		
		  const [empty, setEmpty] = useState([]);
	
		const addItem = item => {
			// add the given item to the cart
			//  e.persist();
			console.log(item );
				axiosWithAuth().post('/users/1/cart', item )
				.then(res=> {
					console.log("res", res);
					setCart([...cart, item ]);
					console.log("cart", cart)
				})
				.catch(err=> console.log("error!", item))
		  };
	
	 const getInventory = e => {
		 e.preventDefault();
			axiosWithAuth().get('/inventory')
			.then(res=> {
				console.log(res);
				setList(res.data);
				
			})
			.catch(err=> console.log("error!"))
	 };
	
		
		return(
	
			<div>
				<h1> Inventory </h1>
				<button onClick={getInventory}>Get Inventory</button>
				<div className="inventory">
				{console.log("List", list)}
				{list.map(item => {
					return (
						<Item 
						addItem={addItem}
						key={item.SKU}
						name={item.name}
						price={item.price}
						pic={item.produceImgURL}
						farmerID={item.farmer_id}
						/>
					)
				})}
				</div>
			</div>
		)
	
	}
	
	

export default ShopperViewInventory;
