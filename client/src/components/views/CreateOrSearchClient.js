import React, { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

import api from "api";

export const CreateOrSearchClient = () => {
  const history = useHistory();
  const {
    state: {
      newAdmin: { name },
    },
  } = useLocation();

  const [searchClientMode, setSearchClientMode] = useState(false);

  const clientsAPI = api("clients");
  //TODO use buttons for conditional search existing client or create client
  //search clients will lead to chart entry page
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   if (searchClientMode) {
  //     setSearchClientMode(true);
  //   }
  // };

  return (
    <Fragment>
      <section className="px-4 py-4 has-text-centered mt-4 mb-4">
        <div className="container">
          <h1 className="title is-3">Hello, {name} !</h1>
          <button className="button is-primary mr-4" type="onClick">
            Add New Client
          </button>
          <button className="button is-primary" type="submit">
            Search Client
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
        onSubmit={async (newClient, { setSubmitting }) => {
          try {
            clientsAPI.create({ ...newClient, charts: [] });
            setSubmitting(false);
            history.push("/clients/chart-entry", { newClient });
          } catch (err) {
            setSubmitting(false);
            console.error(err);
          }
          if (searchClientMode) {
            setSearchClientMode(true);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="box ml-2 has-text-centered">
            {searchClientMode ? <h1>Search Clients</h1> : null}

            {!searchClientMode ? (
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
              </div>
            ) : null}
            <button className="button is-primary mr-4" type="submit">
              Add Client
            </button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};
