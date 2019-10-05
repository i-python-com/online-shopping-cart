import React from 'react'

import fetchApi from '../../modules/fetch-api'

class Order extends React.Component {
  state = {
    order: null
  }

  componentDidMount() {
    fetchApi(
      'get',
      `https://quiet-hamlet-87589.herokuapp.com/orders/${this.props.id}`
    ).then(json => {
      this.setState({
        order: json
      })
    })
  }

  renderOrder() {
    const { name, email, order_items } = this.state.order
    let totalPrice = order_items
      .map(item => item.qty * item.price)
      .reduce((a, b) => a + b)
      .toFixed(2)
    return (
      <div>
        <h3>Order info</h3>
        <div className="my-2">Name: {name}</div>
        <div className="my-2">Email: {email}</div>
        <hr />
        <h4>Items</h4>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>product</th>
              <th>quantity</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {order_items &&
              order_items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price * item.qty}</td>
                </tr>
              ))}
            <tr class="table-success">
              <td>Total</td>
              <td></td>
              <td>{totalPrice}</td>
            </tr>
          </tbody>
        </table>
        <ul></ul>
      </div>
    )
  }

  render() {
    const order = this.state.order
    return (
      <div className="page-pd">{order ? this.renderOrder() : 'Loading...'}</div>
    )
  }
}

export default Order
