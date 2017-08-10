import React from 'react';
import {Shop} from '../../components';
import faker from 'faker';

class ShopContainer extends React.Component {
  state = {
    title: '',
    price: '',
    product: {},
    productName: '',
    image: '',
    products: [],
  }

  componentDidMount = () => {
    this.getTitle();
  }

  getTitle = () => {
    setTimeout(() => {
      this.setState({ title:" Shop Container Title"});
    }, 0)
  }

  updateProductName = (event) => this.setState({productName: event.target.value})
  updatePrice = (event) => this.setState({price: event.target.value})
  updateDepartment = (event) => this.setState({department: event.target.value})
  updateImg = (event) => this.setState ({img: event.target.value})

  handleForSubmit = (event) => {
    event.preventDefault()
    const product = {
      productName: this.state.productName,
      price: this.state.department,
      department: this.state.price,
      img: this.state.image

    }
    let products = this.state.products
    products.push(product)
    console.log("products", products)
    this.setState({products})
  }
  render() {
    return(
      <div>
      <div className='formCard'>
      <form className='formSubmit' onSubmit={this.handleFormSubmit}>
        <input onChange={this.updateProduct} />
        <input onChange={this.updatePrice} />
        <input onChange={this.updateImg} />
        <button type="submit">Submit</button>
      </form>
      </div>
      <div>
      {
        <Shop
        addItem={this.addToCart} />
      }
      </div>
      </div>
    )
  }

}
export default ShopContainer
