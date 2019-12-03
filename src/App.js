import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Router from './Router'

const Navigation = ({ cart }) => (
  <nav className="top-menu">
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          Cart ({' '}
          {cart.reduce((acc, item) => {
            return acc + item.quantity
          }, 0)}{' '}
          )
        </NavLink>
      </li>
      <li>
        <NavLink to="/checkout">Checkout</NavLink>
      </li>
    </ul>
  </nav>
)

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation {...this.props} />
        <div className="container justify-content-center align-items-center">
          <Router />
        </div>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default withRouter(connect(mapStateToProps)(App))
