import React, { Component } from 'react';
import Data from './Data';

const getUserById = (id) => {
  let user
  for (let i =0; i < Data.users.length; i++){
    if(Data.users[i].id === id) {
      user = Data.users[i]
    }
  }
  return user
}

const getProductById = (id) => {
  let product
  for (let i =0; i < Data.products.length; i++){
    if(Data.products[i].id === id) {
      product = Data.products[i]
    }
  }
  return product
}

const getUserNameAndProduct = () => {
  Data.orders.forEach((o) =>{
    console.log(o.id);

    const user = getUserById(o.userId)
    console.log(user.name)

    const product = getProductById(o.productId)
    console.log(product.name)
  })
}

class App extends Component {
  render() {
    getUserNameAndProduct()
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;
