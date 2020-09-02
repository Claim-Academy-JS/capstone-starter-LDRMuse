import React, { Fragment } from "react"

import * as Yup from "yup"

import { Formik, Field, Form, ErrorMessage } from "formik"

export const ClientChart = () => {
  return (
    <Fragment>
      <section className="px-4 py-4 has-text-centered mt-4 mb-4">
        <div className="container">
          <h1 className="title is-2">Client File</h1>
        </div>
      </section>

      <section className="px-4 py-4 mt-4">
        <div className="container">
          <h2 className="title is-5">Client Data</h2>
        </div>
      </section>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
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
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("invalid email")
            .required("Email is required"),
          phone: Yup.string().required("Phone is required"),
          dateOfService: Yup.string().required("required"),
          typeOfService: Yup.string().required("required"),
          pigmentBrand: Yup.string().required("required"),
          colorFormula: Yup.string().required("required"),
          needleBladeBrand: Yup.string().required("required"),
          needleBladeSize: Yup.string().required("required"),
          priceOfService: Yup.string().required("required"),
          additionalNotes: Yup.string().required("required"),
        })}
        onSubmit={(values) => {
          console.log("submission", values)
        }}
      >
        <Form className="ml-2">
          <div className="field">
            <label htmlFor="name">Client Name</label>
            <div className="control">
              <Field className="mt-3" name="name" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="name" />
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
        </Form>

        <section className="px-4 py-4 mt-4">
          <div className="container">
            <h2 className="title is-5">Chart Entry</h2>
          </div>
        </section>

        <Form className="ml-2">
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
            <label htmlFor="additionalNotes">Additional Notes</label>
            <div className="control">
              <Field className="mt-3" name="additionalNotes" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="additionalNotes" />
              </p>
            </div>
          </div>
        </Form>
      </Formik>
    </Fragment>
  )
}
