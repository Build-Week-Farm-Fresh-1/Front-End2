import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FarmerGoBackButton from './FarmerGoBackButton';

// validating form
const validate = ({ farm_name, farm_address }) => {
	const errors = {};

	// validating Farm Name
	if (!farm_name) {
		errors.farm_name = 'Please enter the name of your farm';
	} else if (farm_name.length < 4) {
		errors.farm_name = 'Your name must have two characters or more';
	}

	// validating Address
	if (!farm_address) {
		errors.farm_address = 'Please enter farm address';
	} else if (farm_address.length < 5) {
		errors.farm_address = 'Your address must have 5 characters or more';
	}

	return errors;
};

const FarmerProfile = (props) => {
	return (
		<div>
			<FarmerGoBackButton/>
			<section className='farmer-and-shopper-sign-in-page-section'>
				<h2>Create A Farm Profile</h2>

				<Formik
					initialValues={{
						farm_name    : '',
						farm_address : '',
					}}
					onSubmit={(values) => {
						console.log('Submitted Form', values);
						axiosWithAuth()
							.put('/farms', values)
							.then((response) => {
								console.log(response);
								props.history.push('/farmer/dashboard');
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
									<label htmlFor='farm_name'>Farm Name</label>
									<Field name='farm_name' type='text' placeholder='Enter the name of your farm' />
									<ErrorMessage name='farm_name' component='div' className='error' />
								</div>

								<div className='input-container'>
									<label htmlFor='farm_address'>Farm Address</label>
									<Field name='farm_address' type='text' placeholder='Enter the farm address' />
									<ErrorMessage name='farm_address' component='div' className='error' />
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