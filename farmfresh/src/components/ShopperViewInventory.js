import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import ShopperGoBackButton from './ShopperGoBackButton';
import images from '../images.json';


const ShopperViewInventory = (props) => {
	const [products, setProducts] = useState([]);
	const params = useParams();
	
	// get request stores data, specific farm's inventory, in state
	useEffect(() => {
		const fetchProducts = () => {
			axiosWithAuth()
				.get(`/inventory/${params.id}`)
				.then((response) => {
					setProducts(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		};
		fetchProducts();
	}, []);

	const findImage = (itemName) => {
		console.log(images);
		for (let i = 0; i < images.length; i++) {
			if (images[i].name === itemName.toLowerCase()) {
				return images[i].image;
			}
		}
		return images[0].image;
	}

	return (
		<div>
            <ShopperGoBackButton/>
			<div className='shopper-view-inventory-container'>
			
				<h2>Select Your Fresh Produce</h2>
				<form className='products'>
					{products.map((item, index) => {
						return (
							<div className='product-row' key={index}>
								<img src={findImage(item.item)} alt='produce'/>
								<div>
									<p className='item-name'>{item.item}</p>
									<p>Available: {item.quantity} units</p>
									<div className='select-quantity-container'>
										<p>Quantity:</p>
										<input type='number'></input>
									</div>
								</div>
							</div>
						);
					})}
				</form>
				<button className='cart-button'>Add to Cart</button>
			</div>
		</div>
	);
};

export default ShopperViewInventory;
