import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

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
        <label htmlFor="username">
          Name
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
        

        <button type="submit">Sign In</button>
        <div className="bottom">
          <p>Don't have an account? </p>
          <a href="https://farmfresh1.netlify.com/create"> Create One</a>
        </div>
      </Form>
    </div>
  );
};
const FormikSignInForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",

    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required("Password is required"),

  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
      axiosWithAuth().post("/users/login", values)
      .then(response => {
        console.log("success", response);
        setStatus(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.user.id)
        useHistory().push("/shopperhome");
        
        resetForm();
      })
      .catch(error => console.log(error.response));
  }
})(SignInForm);
export default FormikSignInForm;