import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

import api from "api";

export const EnterClient = () => {
  const history = useHistory();

  return (
    <Fragment>
      <section className="px-4 py-4 has-text-centered mt-4 mb-4">
        <div className="container">
          <button className="button is-primary mr-4" type="submit">
            Add Client
          </button>
          <button className="button is-primary" type="submit">
            Find Client
          </button>
        </div>
      </section>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("first name is required"),
          lastName: Yup.string().required("last name is required"),
          email: Yup.string()
            .email("invalid email")
            .required("Email is required"),
          phone: Yup.string().required("Phone is required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const res = await api.addClient(values);
            setSubmitting(false);

            history.push("/clients/data", { values });
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Form className="box ml-2 has-text-centered">
          <div className="field">
            <label htmlFor="name">Client Name</label>
            <div className="control">
              <Field
                className="mt-3"
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <p className="help is-danger">
                <ErrorMessage name="firstName" />
              </p>
              <Field
                className="mt-3"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <p className="help is-danger">
                <ErrorMessage name="lastName" />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">Client Email</label>
            <div className="control">
              <Field className="mt-3" name="email" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="email" />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="phone">Client Phone</label>
            <div className="control">
              <Field className="mt-3" name="phone" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="phone" />
              </p>
            </div>
          </div>

          <button className="button is-primary mr-4" type="submit">
            Add Client
          </button>
        </Form>
      </Formik>
    </Fragment>
  );
};
