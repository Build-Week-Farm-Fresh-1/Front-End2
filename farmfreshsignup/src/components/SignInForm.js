import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";

import * as Yup from "yup";

const SignInForm = ({ values, errors, touched, status }) => {
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
        <h1>Sign in to account</h1>
        <label htmlFor="email">
          Email Address
          <Field id="email" type="email" name="email" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </label>
        <label htmlFor="password">
          Password
          <Field id="password" type="password" name="password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>

        <button type="submit">Sign In</button>
        <div className="bottom">
          <p>Don't have an account? </p>
          <Link to="/"> Create One</Link>
        </div>
      </Form>
    </div>
  );
};
const FormikSignInForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(values, { setStatus }) {
    console.log("submitting", values);
    axios
      .post("https://regres.in/api/users/", values)
      .then(response => {
        console.log("success", response);
        setStatus(response.data);
      })
      .catch(error => console.log(error.response));
  }
})(SignInForm);
export default FormikSignInForm;
