import React, { useState } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useLocation } from "react-router-dom";

import { Options } from "./Options";

import api from "api";

export const Login = () => {
  const adminApi = api("admin");
  const location = useLocation();
  const [loginMode, setLoginMode] = useState(location.search.includes("login"));
  const [forgotMode, setForgotMode] = useState(false);

  const handleToggle = (event) => {
    if (event.target.textContent.includes("Forgot")) {
      setForgotMode((prev) => !prev);
    } else {
      setForgotMode(false);
      setLoginMode((prev) => !prev);
    }
  };

  return (
    <section className="mt-5 ml-5 mr-5 box has-text-centered">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("invalid email")
            .required("Email is required"),
          password: Yup.string()
            .min(6)
            .max(12)
            .required("password is required"),
        })}
        onSubmit={(newAdmin, { setSubmitting }) => {
          try {
            adminApi.create(newAdmin);
            setSubmitting(false);
            console.log(newAdmin, "aad,");
          } catch (err) {
            setSubmitting(false);
            console.log(err);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="has-text-centered mt-2">
            {!loginMode ? (
              <div className="field">
                <h1 className="title">Get Started</h1>
                <label htmlFor="name">Name</label>
                <div className="control">
                  <Field className="mt-3" name="name" type="text" />
                  <p className="help is-danger">
                    <ErrorMessage name="name" />
                  </p>
                </div>
              </div>
            ) : (
              <h1 className="title mt-4">Admin Login</h1>
            )}
            <div className="field">
              <label htmlFor="email">Email</label>
              <div className="control">
                <Field className="mt-3" name="email" type="text" />
                <p className="help is-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>
            </div>
            {!forgotMode ? (
              <div className="field">
                <label htmlFor="password">Password</label>
                <div className="control">
                  <Field className="mt-3" name="password" type="password" />
                  <p className="help is-danger">
                    <ErrorMessage name="password" />
                  </p>
                </div>
              </div>
            ) : null}
            <button
              className="button is-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Options
        loginMode={loginMode}
        handler={handleToggle}
        forgotMode={forgotMode}
      />
    </section>
  );
};
