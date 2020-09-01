import React, { Fragment } from "react"

import * as Yup from "yup"

import { Formik, Field, Form, ErrorMessage } from "formik"

import {ClientData} from './ClientData'

export const ClientChart = () => {
  return (
    <Fragment>
      <section className="px-4 py-4 has-text-centered mt-4 mb-4">
        <div className="container">
          <h1 className="title is-2">Add Client</h1>
        </div>
      </section>

      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('invalid email').required('Email is required'),
          phone: Yup.string().required('Phone is required'),
        })}
        onSubmit={(values) => {
          console.log("submission", values)
        }}
      >

        <Form className='ml-2 has-text-centered'>
          <div className='field'>
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
      </Formik>
      <ClientData />
      </Fragment>


)
}
