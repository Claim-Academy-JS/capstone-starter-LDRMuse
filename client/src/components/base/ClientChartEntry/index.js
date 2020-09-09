import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";

import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

import routes from "api/routes";
import cloudinary from "api/cloudinary";

import { UploadPhoto } from "./UploadPhoto";

const clientChartAPI = routes("clients");

export const ClientChartEntry = () => {
  const { state } = useLocation();

  const [fotoURL, setFotoUrl] = useState("");

  const handlePhoto = async (event) => {
    event.preventDefault();
    const { target } = event;

    const fd = new FormData();
    fd.append("file", target.elements[0].files[0]);
    fd.append("upload_preset", "brow-and-arrow");

    const res = await cloudinary.upload(fd);

    const { secure_url } = await res.json();
    console.log(secure_url);
  };

  return (
    <Fragment>
      <section className="px-4 py-4 mt-4">
        <div className="container">
          <h2 className="title is-5">
            Chart Entry for {state?.newClient.firstName}{" "}
            {state?.newClient.lastName}
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
        // validationSchema={Yup.object({
        //   dateOfService: Yup.string().required("required"),
        //   typeOfService: Yup.string().required("required"),
        //   pigmentBrand: Yup.string().required("required"),
        //   colorFormula: Yup.string().required("required"),
        //   needleBladeBrand: Yup.string().required("required"),
        //   needleBladeSize: Yup.string().required("required"),
        //   priceOfService: Yup.string().required("required"),
        //   additionalNotes: Yup.string().required("required"),
        // })}
        onSubmit={async (chartValues, { setSubmitting }) => {
          try {
            // {...chartValues, ....{photo: secure_url}}
            const { status, message } = await clientChartAPI.update(
              chartValues,
              state?.newClient.email
            );
            if (status > 400) {
              throw new Error(message || "Unable to add to chart");
            }
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Form className="box has-text-centered ml-2">
          <div className="field">
            <label htmlFor="dateOfService">Date of Service</label>
            <div className="control">
              <Field className="mt-3" name="dateOfService" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="dateOfService" />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="typeOfService">Type of Service</label>
            <div className="control">
              <Field className="mt-3" name="typeOfService" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="typeOfService" />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="pigmentBrand">Pigment Brand</label>
            <div className="control">
              <Field className="mt-3" name="pigmentBrand" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="pigmentBrand" />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="colorFormula">Color Formula</label>
            <div className="control">
              <Field className="mt-3" name="colorFormula" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="colorFormula" />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="needleBladeBrand">Needle/Blade Brand</label>
            <div className="control">
              <Field className="mt-3" name="needleBladeBrand" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="needleBladeBrand" />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="needleBladeSize">Needle/Blade Size</label>
            <div className="control">
              <Field className="mt-3" name="needleBladeSize" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="needleBladeSize" />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="priceOfService">Price of Service</label>
            <div className="control">
              <Field className="mt-3" name="priceOfService" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="priceOfService" />
              </p>
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
          <button className="button is-primary mr-4" type="submit">
            Add Chart Entry
          </button>
        </Form>
      </Formik>
    </Fragment>
  );
};
