import React, { Component } from 'react';
import {HomeContainer, AboutContainer, ShopContainer} from './containers';
import {Route, Switch} from 'react-router-dom';
import {NavBar, Cart, Profile} from "./components";
import ProductList from './components/products/ProductList';
import './App.css';

class Layout extends Component {
  render() {
    console.log(this.props.user)
    return (
      <div>
        <div>
          <NavBar cartCount={ this.props.cart.length } totalPrice={this.props.totalPrice} />
        </div>
        <div>
        <Switch>
          <Route exact path="/" component={ HomeContainer } />
          <Route path="/my-about-page" component={ AboutContainer } />
          <Route path="/my-shop-page" component={ ShopContainer } />
          <Route path="/product-page" render={() => <ProductList products={this.props.products} addToCart={this.props.addToCart}/>} />
          <Route path='/cart' render={() => <Cart cart={this.props.cart} totalPrice={this.props.totalPrice} />} />
          <Route path='/profile' render={() => <Profile user={this.props.user} /> } />
        </Switch>
        </div>
      </div>
    );
  }
}

export default Layout;
