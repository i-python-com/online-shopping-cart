import React from 'react'
import { connect } from 'react-redux'

import Cart from '../cart'
import CheckoutForm from './form'
import fetchApi from '../../modules/fetch-api'

function submitOrder(values, cart) {
  const { email, name } = values.order

  fetchApi('post', 'https://quiet-hamlet-87589.herokuapp.com/orders', {
    name,
    email,
    order_items: cart.map(item => ({
      name: item.name,
      id: item.id,
      qty: item.quantity,
      image: item.image,
      price: item.price
    }))
  }).then(json => {
    if (json.errors) {
      alert('something went wrong!')
      return
    }
    document.location.href = `/orders/${json.id}`
  })
}

function Checkout(props) {
  const { cart } = props
  return (
    <div>
      <Cart />

      <CheckoutForm onSubmit={values => submitOrder(values, cart)} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(state) {
  return {
    display: () => {}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout)
