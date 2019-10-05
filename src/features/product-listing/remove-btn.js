import React from 'react'

export default function RemoveButton(props) {
  return (
    <button
      onClick={() => props.removeFromCart(props.cartItem)}
      className="btn btn-secondary m-2"
    >
      Remove
    </button>
  )
}
