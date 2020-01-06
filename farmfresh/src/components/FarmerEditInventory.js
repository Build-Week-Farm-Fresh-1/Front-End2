import React, { useState, useEffect, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import HeaderWithLogOut from './HeaderWithLogOut';
import FarmerGoBackButton from './FarmerGoBackButton';
import { FarmerEditInventoryContext } from './contexts/FarmerEditInventoryContext';

// validating form
const validate = ({ item_name, quantity }) => {
	const errors = {};

	// validating item_name
	if (!item_name) {
		errors.item_name = 'Please enter an item name';
	} else if (item_name.length < 2) {
		errors.item_name = 'The item name must have more than two characters';
	} else if (/\d/.test(item_name) === true) {
		errors.item_name = 'The item name cannot contain a number';
	}

	// validating quantity
	if (!quantity) {
		errors.quantity = 'Please enter a quantity';
	} else if (quantity > 99) {
		errors.quantity = 'The quantity cannot exceed 99';
	}

	return errors;
};

const AddInventory = () => {
	const [ editing, setEditing ] = useState(false);
	const [ lineItem, setLineItem ] = useState({});
	const { inventory, fetchInventory } = useContext(FarmerEditInventoryContext);
	console.log(inventory);

	const editRow = (item) => {
		setEditing(true);
		setLineItem({
			...item,
		});
	};

	useEffect(() => {
		fetchInventory();
	}, []);

	const deleteItem = (id) => {
		axiosWithAuth()
			.delete(`/inventory/${id}`)
			.then((response) => {
				fetchInventory();
			})
			.catch((err) => console.log(err));
	};

	const changeLineItem = (event) => {
		console.log(event.target.name, event.target.value);
		setLineItem({
			...lineItem,
			[event.target.name]: event.target.value,
		});
	};

	const UpdateItem = () => {
		setEditing(false);
		axiosWithAuth()
			.put(`/inventory/${lineItem.id}`, lineItem)
			.then(() => {
				fetchInventory();
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<HeaderWithLogOut/>
			
			<FarmerGoBackButton/>
			
			<section className='inventory-container'>	

				<h2>Add/Edit Inventory</h2>

				<Formik
					initialValues={{
						item_name : '',
						quantity  : '',
					}}
					onSubmit={(values, tools) => {
						const payload = {
							item     : values.item_name,
							quantity : Number(values.quantity),
						};
						console.log(payload);
						axiosWithAuth()
							.post('/inventory', payload)
							.then((response) => {
								fetchInventory();
								tools.resetForm();
							})
							.catch((error) => {
								console.log(error);
							});
					}}
					validate={validate}>
					{() => {
						return (
							<Form className='inventory-form' autoComplete='off'>
								<div>
									<Field className='quantity-input' name='quantity' type='number' placeholder='1' />
									<Field className='item-name-input' name='item_name' type='text' placeholder='Item Name' />
									<button className='add-button' type='submit'>
										Add
									</button>
								</div>
								<ErrorMessage name='quantity' component='div' className='inventory-error' />
								<ErrorMessage name='item_name' component='div' className='inventory-error' />
							</Form>
						);
					}}
				</Formik>

				<h2>Current Inventory</h2>

				<div className='table'>
					<div>
						<p>Action</p>
						<p>Item</p>
						<p>Qty.</p>
					</div>
				</div>

				<div className='table-contents'>
					{inventory.map((item, index) => (
						<form className='table-row' key={index}>
							<span>
								<i className='fas fa-pen' onClick={() => editRow(item)} />
								<i className='fas fa-trash' onClick={() => deleteItem(item.id)} />
							</span>
							{editing && item.id === lineItem.id ? (
								<input className='edit-item-name-input' name='item' value={lineItem.item} onChange={changeLineItem} />
							) : (
								<p>{item.item}</p>
							)}
							{editing && item.id === lineItem.id ? (
								<input
									className='edit-quantity-input'
									name='quantity'
									value={lineItem.quantity}
									onChange={changeLineItem}
								/>
							) : (
								<p>{item.quantity}</p>
							)}
						</form>
					))}
				</div>

				{editing && (
					<button className='save-changes-button' onClick={UpdateItem}>
						Save Changes
					</button>
				)}
			</section>
		</div>
	);
};

export default AddInventory;
