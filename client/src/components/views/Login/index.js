import React, { useState, useEffect } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useLocation, useHistory } from "react-router-dom";

import { Options } from "./Options";

import api from "api";
import auth from "auth";

export const Login = () => {
  const adminAPI = api("admin");

  const history = useHistory();

  // This will only show something from: 'state: { status: "Create Account" }'
  const { state } = useLocation();

  // If we came from '/login,' there is no 'state'...
  const [status, setStatus] = useState(state?.status || "Loading...");

  const handleStatus = ({
    target: {
      dataset: { status },
    },
  }) => {
    setStatus(status);
  };

  useEffect(() => {
    if (status === "Loading...") {
      (async () => {
        // Destructure 'currentUser' from 'auth' (https://firebase.google.com/docs/auth/web/manage-users)
        const { currentUser: admin } = auth;
        if (admin) {
          try {
            const { uid } = admin;
            history.push(`/clients/${uid}`);
          } catch (error) {
            console.log(error);
          }
        }
        setStatus("Login");
      })();
    } else {
      auth.signOut();
    }
  });

  return status === "Loading..." ? (
    <section className="mt-5 ml-5 mr-5 box has-text-centered">
      <span className="title">{status}</span>
    </section>
  ) : (
    <section className="box center mt-4 section">
      <h2 className="has-text-centered title">{status}</h2>
      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address!")
            .required("Email is required!"),
          name:
            status === "Create Account" &&
            Yup.string().required("Name is required!"),
          password:
            status !== "Reset Password" &&
            Yup.string().min(6).required("Password is required!"),
        })}
        onSubmit={({ name, email, password }, { setSubmitting }) => {
          switch (status) {
            case "Reset Password":
              auth
                .sendPasswordResetEmail(email)
                .then(() => {
                  // TODO: Create a notification to tell them to check their ✉️
                })
                .catch((err) => {
                  console.error(err);
                });
              break;
            case "Login":
              auth
                .signInWithEmailAndPassword(email, password)
                .then(({ admin: { uid } }) => {
                  // Got the user - need the name from the database.
                  // TODO: 😖 Server gets hit 2-3 times for the same request!
                  adminAPI.show(uid);
                  return uid;
                })
                .then((uid) => {
                  setSubmitting(false);
                  //TODO: Answer these questions
                  // I know this is for the Admins own page
                  //but in what order do I need my routes to be
                  //able to got to the Dashboard clients page/component?
                  history.push(`/clients/${uid}/create`, { name });
                })
                .catch((err) => {
                  setSubmitting(false);
                  console.error(err);
                });
              break;
            default:
              auth
                .createUserWithEmailAndPassword(email, password)
                .then(({ admin: { uid } }) => {
                  adminAPI.create({ uid, name });
                })
                .then(() => {
                  setSubmitting(false);
                  setStatus("Loading...");
                })
                .catch((err) => {
                  setSubmitting(false);
                  setStatus(`
                  ${err.message}
                  Unable to create a user ATM! 😞🙇🏽‍♂️
                  Please check your internet connection and/or try again later! 🤞🏽
                `);
                });
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {status !== "Login" && status !== "Reset Password" ? (
              <div className="field has-text-centered">
                <label htmlFor="name" className="ml-2">
                  Name
                </label>
                <div className="control mx-2 my-1">
                  <Field name="name" type="text" className="w-100" />
                  <p className="help is-danger">
                    <ErrorMessage name="name" />
                  </p>
                </div>
              </div>
            ) : null}

            <div className="field has-text-centered">
              <label htmlFor="email" className="ml-2">
                Email
              </label>
              <div className="control mx-2 my-1">
                <Field name="email" type="email" className="w-100" />
                <ErrorMessage name="email" />
              </div>
            </div>

            {status !== "Reset Password" ? (
              <div className="field has-text-centered">
                <label htmlFor="password" className="ml-2">
                  Password
                </label>
                <div className="control mx-2 my-1">
                  <Field name="password" type="password" className="w-100" />
                  <ErrorMessage name="password" />
                </div>
              </div>
            ) : null}
            <div className="has-text-centered">
              <button
                type="submit"
                className="button is-success ml-2 mt-2"
                disabled={isSubmitting}
              >
                {status}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Options status={status} handler={handleStatus} />
    </section>
  );
};
