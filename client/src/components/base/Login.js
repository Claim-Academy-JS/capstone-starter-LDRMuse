import React from 'react'
import * as Yup from 'yup'

import { Formik, Field, Form, ErrorMessage } from "formik"

import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <section className='has-text-centered'>
      <h1 className='title mt-4'>Login</h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={Yup.object({
          username: Yup.string().required('username is required'),
          password: Yup.string().min(6).max(12).required("password is required"),
        })}
        onSubmit={(values) => {
          console.log("submission, values")
        }}
      >

        <Form className='has-text-centered mt-4'>
          <div className='field'>
            <label htmlFor="username">Username</label>
            <div className='control'>
              <Field className='mt-3' name="username" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="username" />
              </p>
            </div>
          </div>

          <div className='field'>
            <label htmlFor="password">Password</label>
            <div className='control'>
              <Field className='mt-3' name="password" type="password" />
              <p className='help is-danger'>
                <ErrorMessage name="password" />
              </p>
            </div>
          </div>
          <button className="button is-primary" type="submit">Submit</button>
        </Form>
      </Formik>
    </section>
  )
}
