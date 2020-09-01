import React from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from "formik"

import { Link } from 'react-router-dom'

import api from 'api'

export const GetStarted = () => {



  //TODO: figure out how to connect these handlers to the formik



  return (
    <section className='has-text-centered'>
      <h1 className='title mt-4'>Get Started</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          username: '',
          password: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('invalid email').required('Email is required'),
          username: Yup.string().required('username is required'),
          password: Yup.string().min(6).max(12).required("password is required"),
        })}
        onSubmit={async (values) => {
          if (!ErrorMessage) {
            const resAdd = await api.addUser({
              values
            })
            return resAdd
            const res = await api.deleteUser()
            return res
          }
          console.log("submission", values)
        }
        }
      >
        {/* onSubmit={formik.handleSubmit} for form
        onChange={Formik.handleChange} for field
        */}

        <Form className='has-text-centered mt-4'>
          <div className='field'>
            <label htmlFor="name">Name</label>
            <div className='control'>
              <Field className='mt-3' name="name" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="name" />
              </p>
            </div>
          </div>

          <div className='field'>
            <label htmlFor="email">Email</label>
            <div className='control'>
              <Field className='mt-3' name="email" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="email" />
              </p>
            </div>
          </div>


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