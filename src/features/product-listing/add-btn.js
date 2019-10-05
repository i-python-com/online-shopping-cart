import React from 'react'

export default function AddButton(props) {
  return (
    <button
      onClick={() => props.addToCart(props.product)}
      className="btn btn-primary"
    >
      Add to cart ({(props.cartItem && props.cartItem.quantity) || 0})
    </button>
  )
}
