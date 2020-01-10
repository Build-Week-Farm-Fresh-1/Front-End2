import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import ShopperGoBackButton from './ShopperGoBackButton';
import images from '../images.json';
import Item from "./Item";
import CartForm from "./CartForm";


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
			console.log(item);
				axiosWithAuth().post('/users/92/cart', item )
				.then(res=> {
					console.log("res", res);
					setCart([...cart, res ]);
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
				<h1> Choose from these available products </h1>

				<CartForm/>
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
						SKU={item.SKU}
						PLU={item.PLU}
						/>
					)
				})}
				</div>
			</div>
		)
	
	}
	
	

export default ShopperViewInventory;
