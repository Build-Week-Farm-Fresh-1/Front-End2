import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const NewAccountForm = ({ values, errors, touched, status }) => {
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
        <h1>Create New Consumer Account</h1>
        <label htmlFor="username">
          Name:
          <Field id="username" type="text" name="username" />
          {touched.username && errors.username && (
            <p className="input-feedback">{errors.username}</p>
          )}
        </label>
        <label htmlFor="password">
          Password
          <Field id="password" type="password" name="password" />
          {touched.password && errors.password && (
            <p className="input-feedback">{errors.password}</p>
          )}
        </label>
        <label htmlFor="city">
          City
          <Field id="city" type="text" name="city" />
          {touched.city && errors.city && (
            <p className="input-feedback">{errors.city}</p>
          )}
        </label>
        <label htmlFor="state">
          State
          <Field id="state" type="text" name="state" />
          {touched.state && errors.state && (
            <p className="input-feedback">{errors.state}</p>
          )}
        </label>
        <label htmlFor="zipCode">
          Zip Code
          <Field id="zipCode" type="number" name="zipCode" />
          {touched.zipCode && errors.zipCode && (
            <p className="input-feedback">{errors.zipCode}</p>
          )}
        </label>

        <button type="submit">Sign In</button>
        <div className="bottom">
          <p>Have an account? </p>
          <a href="/login"> Sign In</a>
        </div>
      </Form>
    </div>
  );
};
const FormikNewAccountForm = withFormik({
  mapPropsToValues({ username, password, city, state, zipCode }) {
    return {
      username: username || "",
      password: password || "",
      city: city || "",
      state: state || "",
      zipCode: zipCode || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required("Password is required"),
    city: Yup.string().required("Password is required"),
    state: Yup.string().required("Password is required"),
    zipCode: Yup.string().required("Password is required")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
      axiosWithAuth().post("/users/register", values)
      .then(response => {
        console.log("success", response.data);
        setStatus(response.data);
        localStorage.setItem("token", response.data.token);
        useHistory().push("/farmerhome")
        resetForm();
      })
      .catch(error => console.log(error.response));
  }
})(NewAccountForm);
export default FormikNewAccountForm;