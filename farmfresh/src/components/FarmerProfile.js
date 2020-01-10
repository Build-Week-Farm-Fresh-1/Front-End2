import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FarmerGoBackButton from './FarmerGoBackButton';

// validating form
const validate = ({ SKU, PLU,  quantity, increment, price}) => {
	const errors = {};

	if (!SKU) {
		errors.SKU = 'Please enter quantity of product';
	} else if (SKU.length < 1) {
		errors.SKU = 'You must add at least 1 of the product';
	}

	// validating Address
	if (!PLU) {
		errors.PLU = 'Please enter quantity of product';
	} else if (PLU.length < 1) {
		errors.PLU = 'You must add at least 1 of the product';
	}

	// validating Farm Name
	// if (!name) {
	// 	errors.name = 'Please enter the name of your product';
	// } else if (name.length < 4) {
	// 	errors.name = 'Your name must have two characters or more';
	// }

	

	if (!quantity) {
		errors.quantity = "pls enter quantity pls";
	} else if (quantity.length<1) {
		errors.quantity = "pls add quantity!!";
	}
	
	if (!increment) {
		errors.incrementL = "pls enter description pls";
	} else if (increment.length<1) {
		errors.increment = "pls add description!!";
	}

	if (!price) {
		errors.price = "pls enter description pls";
	} else if (price.length<1) {
		errors.price = "pls add description!!";
	}

	return errors;
};

const FarmerProfile = (props) => {
	return (
		<div>
			<FarmerGoBackButton/>
			<section className='farmer-and-shopper-sign-in-page-section'>
				<h2>Add Inventory</h2>

				<Formik
					initialValues={{
						SKU: "",
						PLU : '',
						//name: '',
						quantity: "",
						increment: "",
						price: "",
					}}
					onSubmit={(values) => {
						console.log('Submitted Form', values);
						const id = localStorage.getItem('id');
						axiosWithAuth()
							.post(`/farmers/${id}/inventory/`, values)
							.then((response) => {
								console.log(response);
								props.history.push('/farmerprofile');
							})
							.catch((error) => {
								console.log(error);
							});
					}}
					validate={validate}>
					{() => {
						return (
							<Form className='form' autoComplete='off'>

									<div className='input-container'>
									<label htmlFor='SKU'>SKU</label>
									<Field name='SKU' type='number' placeholder='SKU' />
									<ErrorMessage name='SKU' component='div' className='error' />
								</div>
								
								<div className='input-container'>
									<label htmlFor='PLU'>PLU</label>
									<Field name='PLU' type='number' placeholder='PLU - Item ID' />
									<ErrorMessage name='PLU' component='div' className='error' />
								</div>

								{/* <div className='input-container'>
									<label htmlFor='name'>Product</label>
									<Field name='name' type='text' placeholder='Enter the name of your product' />
									<ErrorMessage name='name' component='div' className='error' />
								</div> */}

								<div className='input-container'>
									<label htmlFor='quantity'>quantity</label>
									<Field name='quantity' type='number' placeholder='quantity' />
									<ErrorMessage name='quantity' component='div' className='error' />
								</div>

								<div className='input-container'>
									<label htmlFor='increment'>increment</label>
									<Field name='increment' type='text' placeholder='Lbs or Each' />
									<ErrorMessage name='increment' component='div' className='error' />
								</div>

								<div className='input-container'>
									<label htmlFor='price'>price</label>
									<Field name='price' type='number' placeholder='price' />
									<ErrorMessage name='price' component='div' className='error' />
								</div>

								<button className='farmer-sign-in-button button-spacing' type='submit'>
									Create
								</button>
							</Form>
						);
					}}
				</Formik>
			</section>
		</div>
	);
};

export default FarmerProfile;