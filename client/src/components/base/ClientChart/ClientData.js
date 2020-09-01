import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'

import * as Yup from 'yup'

import { Formik, Field, Form, ErrorMessage } from "formik"

export const ClientData = () => {
  // const {
  //   state: {
  //     values
  //   }
  // } = useLocation()

  return (
    <Fragment>
      <section className="px-4 py-4 mt-4">
        <div className="container">
          <h2 className="title is-5">Chart Entry for {values.firstName} {values.lastName}</h2>
        </div>
      </section>

      <Formik
        initialValues={{
          dateOfService: '',
          typeOfService: '',
          pigmentBrand: '',
          colorFormula: '',
          needleBladeBrand: '',
          needleBladeSize: '',
          priceOfService: '',
          additionalNotes: '',
        }}
        validationSchema={Yup.object({
          dateOfService: Yup.string().required('required'),
          typeOfService: Yup.string().required('required'),
          pigmentBrand: Yup.string().required('required'),
          colorFormula: Yup.string().required('required'),
          needleBladeBrand: Yup.string().required('required'),
          needleBladeSize: Yup.string().required('required'),
          priceOfService: Yup.string().required('required'),
          additionalNotes: Yup.string().required('required'),
        })}
        onSubmit={(values) => {
          console.log("submission", values)
        }}
      >

        <Form className='ml-2'>
          <div className='field'>
            <label htmlFor="dateOfService">Date of Service</label>
            <div className='control'>
              <Field className='mt-3' name="dateOfService" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="dateOfService" />
              </p>
            </div>
          </div>

          <div className='field'>
            <label htmlFor="typeOfService">Type of Service</label>
            <div className='control'>
              <Field className='mt-3' name="typeOfService" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="typeOfService" />
              </p>
            </div>
          </div>


          <div className='field'>
            <label htmlFor="pigmentBrand">Pigment Brand</label>
            <div className='control'>
              <Field className='mt-3' name="pigmentBrand" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="pigmentBrand" />
              </p>
            </div>
          </div>

          <div className='field'>
            <label htmlFor="colorFormula">Color Formula</label>
            <div className='control'>
              <Field className='mt-3' name="colorFormula" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="colorFormula" />
              </p>
            </div>
          </div>

          <div className='field'>
            <label htmlFor="needleBladeBrand">Needle/Blade Brand</label>
            <div className='control'>
              <Field className='mt-3' name="needleBladeBrand" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="needleBladeBrand" />
              </p>
            </div>
          </div>

          <div className='field'>
            <label htmlFor="needleBladeSize">Needle/Blade Size</label>
            <div className='control'>
              <Field className='mt-3' name="needleBladeSize" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="needleBladeSize" />
              </p>
            </div>
          </div>

          <div className='field'>
            <label htmlFor="priceOfService">Price of Service</label>
            <div className='control'>
              <Field className='mt-3' name="priceOfService" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="priceOfService" />
              </p>
            </div>
          </div>

          <div className='field'>
            <label htmlFor="additionalNotes">Additional Notes</label>
            <div className='control'>
              <Field className='mt-3' name="additionalNotes" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="additionalNotes" />
              </p>
            </div>
          </div>
        </Form>
      </Formik>
    </Fragment>
  )
}

