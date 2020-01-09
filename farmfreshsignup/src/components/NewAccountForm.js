import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

const NewAccountForm = ({
  values,
  errors,
  touched,
  status,
  isSubmitting,
  handleSubmit
}) => {
  console.log("values are", values);
  //Checking for changes on state
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("status has changed!", status);
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div className="newAccount-form">
      <Form>
        <h1>Create new account</h1>
        <label htmlFor="firstName">
          First Name:
          <Field
            id="firstName"
            type="text"
            value={values.firstName}
            name="firstName"
            autoComplete="off"
          />
          {touched.firstName && errors.firstName && (
            <div className="input-feedback">
              <p>{errors.firstName}</p>
            </div>
          )}
        </label>
        <label htmlFor="lastName">
          Last Name
          <Field
            id="lastName"
            type="text"
            value={values.lastName}
            name="lastName"
            autoComplete="off"
          />
          {touched.lastName && errors.lastName && (
            <div className="input-feedback">
              <p>{errors.lastName}</p>
            </div>
          )}
        </label>
        <label htmlFor="email">
          Email Address
          <Field
            id="email"
            type="text"
            value={values.email}
            name="email"
            autoComplete="off"
          />
          {touched.email && errors.email && (
            <div className="input-feedback">
              <p>{errors.email}</p>
            </div>
          )}
        </label>
        <label htmlFor="password">
          Password
          <Field
            id="password"
            type="password"
            value={values.password}
            name="password"
            autoComplete="off"
          />
          {touched.password && errors.password && (
            <div className="input-feedback">
              <p>{errors.password}</p>
            </div>
          )}
        </label>
        <label htmlFor="tos" className="checkbox-container">
          I have read the Terms and Conditions
          <Field id="tos" type="checkbox" name="tos" checked={values.tos} />
          {touched.tos && errors.tos && (
            <div className="input-feedback">
              <p>{errors.tos}</p>
            </div>
          )}
          <span className="checkmark" />
        </label>
        <button type="submit" disabled={isSubmitting}>
          Create and Account
        </button>
        <div className="bottom">
          <p>Have an account? </p>
          <Link to="/login"> Sign In</Link>
        </div>
      </Form>
    </div>
  );
};
const FormikNewAccForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password, tos }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || "",
      tos: false
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(4, "Password must be 4 characters or longer")
      .required(),
    tos: Yup.boolean().oneOf([true], "Must approve to submit")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://farmers-fresh-api.herokuapp.com/api/users/login", values)
      .then(response => {
        console.log("success", response);
        setStatus(response.data);
        resetForm();
      })
      .catch(error => console.log(error.response));
  }
})(NewAccountForm);
export default FormikNewAccForm;
