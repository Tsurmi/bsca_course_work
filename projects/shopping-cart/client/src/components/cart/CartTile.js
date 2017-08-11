import React from 'react';


const CartTile = (props) => {
  return(
    <div className="cartContainer">
      <div className="cartCard">
        <h1> {props.item.productName} </h1>
        <h3> Price: ${props.item.price} </h3>
        <p> Category: {props.item.department} </p>
        <img src={props.item.img} />
      </div>
    </div>
  )
}


export default CartTile;
