import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Router from './Router'

const Navigation = ({ cart }) => (
  <nav>
    <ul className="top-menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart ({cart.length})</NavLink>
      </li>
    </ul>
  </nav>
)

class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Navigation {...this.props} />
        <Router />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default withRouter(connect(mapStateToProps)(App))
