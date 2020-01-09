import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

const NewAccountForm = ({ values, errors, touched, status, isSubmitting }) => {
  console.log("values are", values);
  //Checking for changes on state
  const [users, setUsers] = useState([]);
  //To redirect the page to home page after submitting
  // const [toHome, setToHome] = useState(false);
  useEffect(() => {
    console.log("status has changed!", status);
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div className="newAccount-form">
      <Form>
        <h1>Create new account</h1>
        <label htmlFor="username">
          Enter your name:
          <Field id="username" type="text" name="username" autoComplete="off" />
          {touched.username && errors.username && (
            <div className="input-feedback">
              <p>{errors.username}</p>
            </div>
          )}
        </label>

        <label htmlFor="password">
          Password:
          <Field
            id="password"
            type="password"
            name="password"
            autoComplete="off"
          />
          {touched.password && errors.password && (
            <div className="input-feedback">
              <p>{errors.password}</p>
            </div>
          )}
        </label>
        <label htmlFor="city">
          City:
          <Field id="city" type="text" name="city" autoComplete="off" />
          {touched.city && errors.city && (
            <div className="input-feedback">
              <p>{errors.city}</p>
            </div>
          )}
        </label>
        <label htmlFor="state">
          State:
          <Field id="state" type="text" name="state" autoComplete="off" />
          {touched.state && errors.state && (
            <div className="input-feedback">
              <p>{errors.state}</p>
            </div>
          )}
        </label>
        <label htmlFor="zipCode">
          Zip Code:
          <Field id="zipCode" type="number" name="zipCode" autoComplete="off" />
          {touched.zipCode && errors.zipCode && (
            <div className="input-feedback">
              <p>{errors.zipCode}</p>
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
          {isSubmitting ? "SUBMITTING" : "Create an Account"}
          {/* {toHome ? <Redirect to="/home" /> : null} */}
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
  mapPropsToValues({ username, password, city, state, zipCode, tos }) {
    return {
      username: username || "",
      password: password || "",
      city: city || "",
      state: state || "",
      zipCode: zipCode || "",
      tos: false
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Name is required"),
    password: Yup.string()
      .min(4, "Password must be 4 characters or longer")
      .required(),
    city: Yup.string().required("City is required"),
    state: Yup.string().required(),
    zipCode: Yup.number().required(),
    tos: Yup.boolean().oneOf([true], "Must approve to submit")
  }),
  handleSubmit(values, { setStatus, resetForm, setSubmitting }) {
    console.log("submitting", values);
    axios
      .post("https://reqres.in/api/users", values)
      .then(response => {
        console.log("success", response);

        setStatus(response.data);
        resetForm();
      })
      .catch(error => console.log(error.response))
      .finally(() => {
        setSubmitting(false);
        // setToHome(true);
      });
  }
})(NewAccountForm);
export default FormikNewAccForm;
