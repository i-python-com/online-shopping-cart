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
      console.log(json)
      this.setState({
        order: json
      })
    })
  }

  renderOrder() {
    const { name, email, order_items } = this.state.order
    return (
      <div>
        <h3>Order info</h3>
        <div>Name: {name}</div>
        <div>Email: {email}</div>

        <h4>Items</h4>
        <table>
          <thead>
            <th>product</th>
            <th>quantity</th>
            <th>price</th>
          </thead>
          <tbody>
            {order_items &&
              order_items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <ul></ul>
      </div>
    )
  }

  render() {
    const order = this.state.order
    return <div>{order ? this.renderOrder() : 'Loading...'}</div>
  }
}

export default Order
