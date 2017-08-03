import React from 'react';

const Menu = (props) => {
  console.log(props.category);
  return(
    <div className="menu-container">
      {
        props.items
          .filter((item) => item.spiceLevel >= props.spiceThresh && item.category.includes(props.category))
          .map((item,index) =>
            <div key={index} className="menu-item">
              <h3>{item.name} </h3>
              <p> Spice Level: {item.spiceLevel}</p>
              <p> Category: {item.category}</p>
              <img className="img"src={item.img}/>
            </div>
        )
      }
    </div>
  )
}


export default Menu;
