  import React from 'react';

  const ProductList = (props) => {
    console.log(props);
    return(
      <div>
        <div className='productList'>
          {
            props.products.map((product,index) => (

                <div className='productCard' key={index}>
                  <h1> {product.productName} </h1>
                  <h3> $ {product.price} </h3>
                  <button className='btnAddToCart' onClick={() => props.addToCart(product)}> Add to Cart </button>
                  <img src={product.img} />
                </div>
              )
            )
          }
        </div>
      </div>
    )
  }

  export default ProductList;
