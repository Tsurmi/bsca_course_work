import React from 'react';
import Layout from "../../Layout";
import faker from 'faker';

class DataProvider extends React.Component {

  state = {
    products: [],
    cart: [],
    user: null,
    isDataLoaded: false

  }

  componentDidMount = () => {
    this.fetchProductsFromServer()
  }

  fetchProductsFromServer = () => {
    const temporaryArray = [];
    for(var i=0; i<21; i++){
      temporaryArray.push({
        productName: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        img: faker.random.image()
      })
    }
    this.setState({
      products: temporaryArray,
      user: this.createUser(),
      isDataLoaded: true
    })
  }

  addToCart = (product) => {
    const tempCart = this.state.cart;
    tempCart.push(product);
    this.setState({  cart: tempCart});
    // alert(product.productName);
  }

  createUser = () => {
    const user = {
      fName: faker.name.firstName(),
      lName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
    }
    return user;
  }

  render(){
    let totalPrice = 0;
    for (let i=0; i <this.state.cart.length; i++){
      totalPrice += parseFloat(this.state.cart[i].price);
    }
    return (
      <div>
        {
        this.state.isDataLoaded ?
        <Layout
          title={this.state.title}
          products={this.state.products}
          addToCart={this.addToCart}
          cart={this.state.cart}
          totalPrice={totalPrice.toFixed(2)}
          user={this.state.user}
        />
        : <h1> Data Loading </h1>
        }
      </div>
    )
  }
}

export default DataProvider;
