import React from 'react'

import {Link} from 'react-router-dom'

export const Four04 = () => {
  return (
    <section className='container'>
      <h2 className='is-1'>404</h2>
      <p className='has-text-danger'>We cannot find that page!!!
      <Link to='/'>Wanna go home?</Link>
      </p>
    </section>
  )
}
