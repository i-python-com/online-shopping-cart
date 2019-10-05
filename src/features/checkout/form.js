import React from 'react'
import { Field, reduxForm } from 'redux-form'

function CheckoutForm(props) {
  const { handleSubmit } = props

  return (
    <div className="page-pd">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="order[name]">Your name:</label>
          <br />
          <Field name="order[name]" component="input" type="text" />
        </div>

        <div>
          <label htmlFor="order[email]">Email:</label>
          <br />
          <Field name="order[email]" component="input" type="email" />
        </div>

        <div>
          <button type="submit">Submit order</button>
        </div>
      </form>
    </div>
  )
}

let newCheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm)

export default newCheckoutForm
