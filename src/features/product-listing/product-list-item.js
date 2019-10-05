import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'

export default function ProductListItem(props) {
  return (
    <div className="product-list-item m-2">
      <img
        className="mb-3"
        height={200}
        title={props.product.name}
        src={`/products/${props.product.image}`}
        alt=""
      />
      <h5>{props.product.name}</h5>
      <div>{props.product.description}</div>

      <div className="badge badge-info m-2">${props.product.price}</div>
      <div>
        <AddBtn
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />
        {props.cartItem ? (
          <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  )
}
