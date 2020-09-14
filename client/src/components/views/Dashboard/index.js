import React, { Fragment, useEffect, useReducer } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

import routes from "api/routes";

import auth from "auth";

import { ClientTable } from "./ClientTable";

function createClientsEmailList(emails) {
  return emails
    .map(
      ({ text }, i) => `
    ${i + 1}. ${text}
  `
    )
    .join("");
}

function reducer(state, action) {
  switch (action.type) {
    case "init":
      return state.concat(action.clients);
    default:
      return state;
  }
}

export const Dashboard = () => {
  const history = useHistory();
  const { uid } = useParams();
  const { state } = useLocation();
  const [clients, dispatch] = useReducer(reducer, []);

  const clientsAPI = routes("clients");

  useEffect(() => {
    (async () => {
      try {
        // List clients with matching "uid"
        const clients = await clientsAPI.show(uid);
        // if (res.status > 400) {
        //   throw new Error("Unable to view Clients");
        // }
        dispatch({ clients, type: "init" });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleSignOut = () => {
    auth.signOut().then(history.push("/login"));
  };

  const handleEmail = async () => {
    try {
      const res = await clientsAPI.create(
        {
          firstName: state.firstName,
          lastName: state.lastName,
          email: createClientsEmailList(clients.filter(({ email }) => !email)),
        },
        "email"
      );
      if (res.status > 400) {
        throw new Error(res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <section className="px-4 py-4 has-text-centered mt-4 mb-4">
        <div className="container">
          <h1 className="title is-3">Hello, {state?.name} !</h1>
          <button
            className="button is-text has-background-danger-light"
            onClick={handleSignOut}
          >
            Not {state?.name}?
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
          // firstName: Yup.string().required("first name is required"),
          // lastName: Yup.string().required("last name is required"),
          // email: Yup.string()
          //   .email("invalid email")
          //   .required("Email is required"),
          // phone: Yup.string().required("Phone is required"),
        })}
        // Add a new client
        onSubmit={async (newClient, { setSubmitting }) => {
          try {
            const newClientWithCharts = {
              ...newClient,
              charts: [],
              uid,
            };
            // take newClient object and spread,
            // destructure insertedId and insert into newClient object
            // create empty array for chart notes to go into
            const { insertedId } = await clientsAPI.create(newClientWithCharts);
            setSubmitting(false);
            // take newClient to route (using insertedId); Display is ClientChartEntry component
            history.push(`/client/${insertedId}`, {
              currentClient: newClientWithCharts,
            });
          } catch (err) {
            setSubmitting(false);
            console.error(err);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="container box has-text-centered">
            <h1 className="title is-4 has-text-centered">Add New Client</h1>
            <div className="field is-grouped is-grouped-centered mb-4">
              <label htmlFor="name" className="is-sr-only">
                First Name
              </label>
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
              </div>

              <label htmlFor="name" className="is-sr-only">
                Last Name
              </label>
              <div className="control">
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
                <label htmlFor="email" className="is-sr-only">
                  Client Email
                </label>
                <div className="control">
                  <Field
                    className="mt-3"
                    name="email"
                    type="text"
                    placeholder="Email"
                  />
                  <p className="help is-danger">
                    <ErrorMessage name="email" />
                  </p>
                </div>
              </div>

              <div className="field ml-3">
                <label htmlFor="phone" className="is-sr-only">
                  Client Phone
                </label>
                <div className="control">
                  <Field
                    className="mt-3"
                    name="phone"
                    type="text"
                    placeholder="(xxx)xxx-xxxx"
                  />
                  <p className="help is-danger">
                    <ErrorMessage name="phone" />
                  </p>
                </div>
              </div>

              <button
                className="button is-primary ml-3 is-small mt-2"
                type="submit"
                disabled={isSubmitting}
              >
                Add
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <button onClick={handleEmail}>Email Me List of Clients</button>
      <ClientTable clients={clients} />
    </Fragment>
  );
};
