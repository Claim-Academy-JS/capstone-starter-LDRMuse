import React, { Fragment, useState, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import routes from "api/routes";
import cloudinary from "api/cloudinary";
import { UploadPhoto } from "./UploadPhoto";
import { Charts } from "./Charts";

const clientChartAPI = routes("clients");

export const ClientChartEntry = () => {
  const history = useHistory();
  const { id } = useParams();

  const { state } = useLocation();
  console.log(state, "state");

  const [fotoURL, setFotoUrl] = useState("");
  // const [charts, setCharts] = useState([]);

  const handlePhoto = async (event) => {
    event.preventDefault();
    const { target } = event;

    const fd = new FormData();
    fd.append("file", target.elements[0].files[0]);
    fd.append("upload_preset", "brow-and-arrow");

    const res = await cloudinary.upload(fd);
    // destructuring secure_url and turning it into json- this comes from the console.log(res)
    const { secure_url } = await res.json();
    // using secure_url to set the state
    setFotoUrl(secure_url);
  };

  return (
    <Fragment>
      <section className="px-4 py-4 mt-4">
        <div className="container">
          <h2 className="title is-5">
            Chart Entry for{" "}
            {state.state?.firstName || state.currentClient?.firstName}{" "}
            {state.state?.lastName || state.currentClient?.lastName}
          </h2>
        </div>
      </section>
      <UploadPhoto handler={handlePhoto} />
      <Formik
        initialValues={{
          dateOfService: "",
          typeOfService: "",
          pigmentBrand: "",
          colorFormula: "",
          needleBladeBrand: "",
          needleBladeSize: "",
          priceOfService: "",
          additionalNotes: "",
        }}
        validationSchema={Yup.object({
          dateOfService: Yup.string().required("required"),
          typeOfService: Yup.string().required("required"),
          pigmentBrand: Yup.string().required("required"),
          colorFormula: Yup.string().required("required"),
          needleBladeBrand: Yup.string().required("required"),
          needleBladeSize: Yup.string().required("required"),
          priceOfService: Yup.string().required("required"),
          additionalNotes: Yup.string().required("required"),
        })}
        // chartValues is declared below because the form is submitting these values onSubmit
        onSubmit={async (chartValues, { setSubmitting }) => {
          try {
            const chartValuesWithFoto = { ...chartValues, fotoURL };
            const { status, message } = await clientChartAPI.update(
              { chartValues: chartValuesWithFoto },
              state?.currentClient.email
            );
            if (status > 400) {
              throw new Error(message || "Unable to add image to chart");
            }
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Form className="container box">
          <h1 className="title is-4 has-text-centered mt-4 mb-5">
            New Chart Entry
          </h1>

          <div className="columns">
            <div className="field mb-4">
              <label className="is-sr-only" htmlFor="dateOfService">
                Date of Service
              </label>
              <div className="column">
                <Field
                  className="mt-3"
                  name="dateOfService"
                  type="text"
                  placeholder="Date of Service"
                />
                <p className="help is-danger">
                  <ErrorMessage name="dateOfService" />
                </p>
              </div>

              <label className="is-sr-only" htmlFor="typeOfService">
                Type of Service
              </label>
              <div className="column">
                <Field
                  className="mt-3"
                  name="typeOfService"
                  type="text"
                  placeholder="Type of Service"
                />
                <p className="help is-danger">
                  <ErrorMessage name="typeOfService" />
                </p>
              </div>

              <label className="is-sr-only" htmlFor="pigmentBrand">
                Pigment Brand
              </label>
              <div className="column">
                <Field
                  className="mt-3"
                  name="pigmentBrand"
                  type="text"
                  placeholder="Pigment Brand"
                />
                <p className="help is-danger">
                  <ErrorMessage name="pigmentBrand" />
                </p>
              </div>

              <label className="is-sr-only" htmlFor="colorFormula">
                Color Formula
              </label>
              <div className="column">
                <Field
                  className="mt-3"
                  name="colorFormula"
                  type="text"
                  placeholder="Color Formula"
                />
                <p className="help is-danger">
                  <ErrorMessage name="colorFormula" />
                </p>
              </div>

              <label className="is-sr-only" htmlFor="needleBladeBrand">
                Needle/Blade Brand
              </label>
              <div className="column">
                <Field
                  className="mt-3"
                  name="needleBladeBrand"
                  type="text"
                  placeholder="Needle/Blade Brand"
                />
                <p className="help is-danger">
                  <ErrorMessage name="needleBladeBrand" />
                </p>
              </div>

              <label className="is-sr-only" htmlFor="needleBladeSize">
                Needle/Blade Size
              </label>
              <div className="column">
                <Field
                  className="mt-3"
                  name="needleBladeSize"
                  type="text"
                  placeholder="Needle/Blade Size"
                />
                <p className="help is-danger">
                  <ErrorMessage name="needleBladeSize" />
                </p>
              </div>

              <label className="is-sr-only" htmlFor="priceOfService">
                Price of Service
              </label>
              <div className="column">
                <Field
                  className="mt-3"
                  name="priceOfService"
                  type="text"
                  placeholder="Price of Service"
                />
                <p className="help is-danger">
                  <ErrorMessage name="priceOfService" />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="additionalNotes"> </label>
            <div className="control">
              <Field
                className="mt-5 textarea has-background-danger-light"
                name="additionalNotes"
                type="text"
                placeholder="Additional Notes"
              />
              <p className="help is-danger">
                <ErrorMessage name="additionalNotes" />
              </p>
            </div>
          </div>

          <div className="has-text-centered mt-5">
            <button className="button is-primary" type="submit">
              Add Chart Entry
            </button>
            <button
              className="button is-success ml-4"
              type="button"
              onClick={() => history.goBack()}
            >
              Go Back
            </button>
          </div>
        </Form>
      </Formik>
      <Charts charts={state.currentClient.charts} />
    </Fragment>
  );
};
