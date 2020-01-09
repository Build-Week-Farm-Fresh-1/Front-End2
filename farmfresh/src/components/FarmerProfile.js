import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FarmerGoBackButton from './FarmerGoBackButton';

// validating form
const validate = ({ PLU, name, description, produceImgURL}) => {
	const errors = {};

	// validating Address
	if (!PLU) {
		errors.PLU = 'Please enter quantity of product';
	} else if (PLU.length < 1) {
		errors.PLU = 'You must add at least 1 of the product';
	}

	// validating Farm Name
	if (!name) {
		errors.name = 'Please enter the name of your product';
	} else if (name.length < 4) {
		errors.name = 'Your name must have two characters or more';
	}

	

	if (!description) {
		errors.description = "pls enter description pls";
	} else if (description.length<1) {
		errors.description = "pls add description!!";
	}
	
	if (!produceImgURL) {
		errors.produceImgURL = "pls enter description pls";
	} else if (produceImgURL.length<1) {
		errors.produceImgURL = "pls add description!!";
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
						PLU : '',
						name: '',
						description: "",
						produceImgURL: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
					}}
					onSubmit={(values) => {
						console.log('Submitted Form', values);
						axiosWithAuth()
							.post('/produce/', values)
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
									<label htmlFor='PLU'>PLU</label>
									<Field name='PLU' type='number' placeholder='PLU' />
									<ErrorMessage name='PLU' component='div' className='error' />
								</div>

								<div className='input-container'>
									<label htmlFor='name'>Product</label>
									<Field name='name' type='text' placeholder='Enter the name of your product' />
									<ErrorMessage name='name' component='div' className='error' />
								</div>

								<div className='input-container'>
									<label htmlFor='description'>description</label>
									<Field name='description' type='text' placeholder='description' />
									<ErrorMessage name='description' component='div' className='error' />
								</div>

								<div className='input-container'>
									<label htmlFor='produceImgURL'>Picture</label>
									<Field name='produceImgURL' type='text' placeholder='produceImgURL' />
									<ErrorMessage name='produceImgURL' component='div' className='error' />
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