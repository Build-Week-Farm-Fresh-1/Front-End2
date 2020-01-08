import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const NewAccountForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("status has changed", status);
    status && setUsers(user => [...users, status]);
  }, [status]);
  return (
    <div className="newAccount-form">
      <Form>
        <h1>Create new account</h1>
        <label htmlFor="firstName">First Name:</label>
        <Field id="firstName" type="text" name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" type="text" name="lastName" />
        <label htmlFor="email">Email Address</label>
        <Field id="email" type="text" name="email" />
        <label htmlFor="password">Password</label>
        <Field id="password" type="password" name="password" />
        <label className="checkbox-container">
          I have read the Terms and Conditions
          <Field
            id="termsConditions"
            type="checkbox"
            name="termsConditions"
            checked={values.termsConditions}
          />
          <span className="checkmark" />
        </label>
        <button type="submit">Create and Account</button>
        <div className="bottom">
          <p>Have an account? </p>
          <a href="#"> Sign In</a>
        </div>
      </Form>
    </div>
  );
};
const FormikNewAccForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password, termsConditions }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      emial: email || "",
      password: password || "",
      termsConditions: false
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required("Name is required")
  }),
  handleSubmit(values, { setStatus }) {
    console.log("submitting", values);
    axios.post("https://regres.in/api/users/", values).then(response => {
      console.log("success", response);
      setStatus(response.data);
    });
  }
})(NewAccountForm);
export default FormikNewAccForm;
