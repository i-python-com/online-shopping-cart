import React from 'react'

export default function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <h3>{props.product.name}</h3>
      <img
        height={100}
        title={props.product.name}
        src={`/products/${props.product.image}`}
        alt=""
      />
      <div>{props.product.description}</div>
      <div>${props.product.price}</div>
      <div>
        <button onClick={() => props.addToCart(props.product)}>
          Add to cart ({(props.cartItem && props.cartItem.quantity) || 0})
        </button>
      </div>
    </div>
  )
}
