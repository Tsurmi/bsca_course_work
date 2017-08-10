import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  return(
    <div>
      <nav className="navBar">
        <ul className="navLinks">
          <li> <Link className="Link" to="/">Home</Link> </li>
          <li> <Link className="Link" to="/my-about-page">About</Link> </li>
          <li> <Link className="Link" to="/product-page">Products</Link> </li>
          <li> <Link className="Link" to="/cart"> Total Items: {props.cartCount} </Link> </li>
          <li> <p> $ {props.totalPrice} </p> </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
