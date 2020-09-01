import React, {Fragment} from 'react'

import * as Yup from 'yup'

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
      //TODO: Do I add addtional validatation here or make a new formik below this one?
        initialValues={{
          name: '',
          email: '',
          phone: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('invalid email').required('Email is required'),
          phone: Yup.string(),
        })}
        onSubmit={(values) => {
          console.log("submission", values)
        }
        }

      >
<Form className='ml-2'>
        <div className='field'>
          <label htmlFor="name">Client Name</label>
          <div className='control'>
            <Field className='mt-3' name="name" type="text" />
            <p className='help is-danger'>
              <ErrorMessage name="name" />
            </p>
          </div>
        </div>

        <div className='field'>
          <label htmlFor="email">Client Email</label>
          <div className='control'>
            <Field className='mt-3' name="email" type="text" />
            <p className='help is-danger'>
              <ErrorMessage name="email" />
            </p>
          </div>
        </div>


        <div className='field'>
          <label htmlFor="phone">Client Phone</label>
          <div className='control'>
            <Field className='mt-3' name="phone" type="text" />
            <p className='help is-danger'>
              <ErrorMessage name="phone" />
            </p>
          </div>
        </div>
      </Form>
      </Formik>

      <section className="px-4 py-4 mt-4">
      <div className="container">
        <h2 className="title is-5">Chart Entry</h2>
      </div>
      </section>

      <Formik
        initialValues={{
          "Date of Service": '',
          "Type of Service": '',
          "Pigment Brand": '',
          "Color Formula": '',
          "Needle/Blade Brand": '',
          "Needle/Blade Size": '',
          "Price of Service": '',
          "Additional Notes:" '',


        }}
        validationSchema={Yup.object({
          "Date of Service": Yup.string().required('Name is required'),
          "Type of Service": Yup.string().required('Name is required'),
          "Pigment Brand": Yup.string().required('Name is required'),
          "Color Formula": Yup.string().required('Name is required'),
          "Needle/Blade Brand": Yup.string().required('Name is required'),
          "Needle/Blade Size": Yup.string().required('Name is required'),
          "Price of Service": Yup.string().required('Name is required'),
          "Additional Notes": Yup.string().required('Name is required'),
        })}
        onSubmit={(values) => {
          console.log("submission", values)
        }
        }

      >
<Form className='ml-2'>
        <div className='field'>
          <label htmlFor="name">Date Of Service</label>
          <div className='control'>
            <Field className='mt-3' name="name" type="text" />
            <p className='help is-danger'>
              <ErrorMessage name="name" />
            </p>
          </div>
        </div>

        <div className='field'>
          <label htmlFor="email">Client Email</label>
          <div className='control'>
            <Field className='mt-3' name="email" type="text" />
            <p className='help is-danger'>
              <ErrorMessage name="email" />
            </p>
          </div>
        </div>


        <div className='field'>
          <label htmlFor="phone">Client Phone</label>
          <div className='control'>
            <Field className='mt-3' name="phone" type="text" />
            <p className='help is-danger'>
              <ErrorMessage name="phone" />
            </p>
          </div>
        </div>

        <div className='field'>
          <label htmlFor="phone">Client Phone</label>
          <div className='control'>
            <Field className='mt-3' name="phone" type="text" />
            <p className='help is-danger'>
              <ErrorMessage name="phone" />
            </p>
          </div>
        </div>

        <div className='field'>
          <label htmlFor="phone">Client Phone</label>
          <div className='control'>
            <Field className='mt-3' name="phone" type="text" />
            <p className='help is-danger'>
              <ErrorMessage name="phone" />
            </p>
          </div>
        </div>

        <div className='field'>
          <label htmlFor="phone">Client Phone</label>
          <div className='control'>
            <Field className='mt-3' name="phone" type="text" />
            <p className='help is-danger'>
              <ErrorMessage name="phone" />
            </p>
          </div>
        </div>

        <div className='field'>
          <label htmlFor="phone">Client Phone</label>
          <div className='control'>
            <Field className='mt-3' name="phone" type="text" />
            <p className='help is-danger'>
              <ErrorMessage name="phone" />
            </p>
          </div>
        </div>

        <div className='field'>
          <label htmlFor="phone">Client Phone</label>
          <div className='control'>
            <Field className='mt-3' name="phone" type="text" />
            <p className='help is-danger'>
              <ErrorMessage name="phone" />
            </p>
          </div>
        </div>
      </Form>
      </Formik>


      </Fragment>


)
}
