import React, { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

import api from "api";
import auth from "auth";

import { Options } from "./Options";

export const Dashboard = () => {
  const history = useHistory();
  const { state } = useLocation();

  const [status, setStatus] = useState("Add Client");

  const clientsAPI = api("clients");

  const handleToggle = ({ target: { textContent } }) => {
    setStatus(textContent);
  };

  const handleSignOut = () => {
    auth.signOut().then(history.push("/login"));
  };

  return (
    <Fragment>
      <section className="px-4 py-4 has-text-centered mt-4 mb-4">
        <div className="container">
          <h1 className="title is-3">Hello, {state?.name} !</h1>
          <button className="button is-text" onClick={handleSignOut}>
            Not {state?.name}?
          </button>
        </div>
      </section>
      <Options handler={handleToggle} status={status} />
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
        onSubmit={async (newClient, { setSubmitting }) => {
          try {
            const { insertedId } = await clientsAPI.create({
              ...newClient,
              charts: [],
            });
            setSubmitting(false);
            history.push(`/client/${insertedId}`, { newClient });
          } catch (err) {
            setSubmitting(false);
            console.error(err);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="box ml-2 has-text-centered">
            {status === "Add Client" ? (
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

                <button
                  className="button is-primary mr-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            ) : (
              <div>
                <h1>Search Clients</h1>
                <button
                  className="button is-primary mr-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
      {/* <ClientChartEntry handler={handleSignOut} /> */}
    </Fragment>
  );
};
