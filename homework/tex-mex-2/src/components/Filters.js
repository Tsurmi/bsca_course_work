import React from 'react';

const Filters = (props) => {
  return (
    <div>
    <label>How Spicy?</label>
      <input type="number" onChange={(event) => props.setSpiceThresh(event)}/>
    <label>What Type?</label>  
      <input type="text" onChange={(event) => props.setCategory(event)}/>
    </div>
  )
}

export default Filters;
