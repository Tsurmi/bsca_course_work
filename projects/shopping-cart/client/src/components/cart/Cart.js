import React from 'react';
import CartTile from './CartTile';
const Cart = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Your Shopping Cart</h1>

      <div className="cartContainer">
        {
          props.cart.map((item,index) => <CartTile item={item} key={index} />)
        }
      </div>
    </div>
  )
}

export default Cart;
