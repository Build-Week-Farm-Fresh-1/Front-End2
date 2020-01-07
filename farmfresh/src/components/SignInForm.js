import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const SignInForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("status has changed", status);
    status && setUsers(user => [...users, status]);
  }, []);
  return (
    <div className="newAccount-form">
      <Form>
        <h1>Sign in to account</h1>
        <label htmlFor="email">Email Address</label>
        <Field id="email" type="email" name="email" />
        <label htmlFor="password">Password</label>
        <Field id="password" type="password" name="password" />

        <button type="submit">Sign In</button>
        <div className="bottom">
          <p>Don't have an account? </p>
          <a className="createOne" href="/create"> Create One</a>
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
    email: Yup.string().required(),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(values, { setStatus }) {
    console.log("submitting", values);
    axios.post("https://regres.in/api/users/", values).then(response => {
      console.log("success", response);
      setStatus(response.data);
    });
  }
})(SignInForm);
export default FormikSignInForm;