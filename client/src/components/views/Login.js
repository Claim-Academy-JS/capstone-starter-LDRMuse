import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// import { Link } from "react-router-dom";

import api from "api";

export const Login = () => {
  const adminApi = api("admin");

  return (
    <section className="has-text-centered">
      <h1 className="title mt-4">Login</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("username is required"),
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
          <Form className="has-text-centered mt-4">
            <div className="field">
              <label htmlFor="username">Username</label>
              <div className="control">
                <Field className="mt-3" name="username" type="text" />
                <p className="help is-danger">
                  <ErrorMessage name="username" />
                </p>
              </div>
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="control">
                <Field className="mt-3" name="password" type="password" />
                <p className="help is-danger">
                  <ErrorMessage name="password" />
                </p>
              </div>
            </div>
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
    </section>
  );
};
