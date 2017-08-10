import React from 'react';

const About = (props) => {
  return (
    <div>
      <h1 className='aboutCard'> {props.title} </h1>
      <img src="http://www.missourimanufacturers.org/uploads/7/4/1/5/74158985/coming-soon_1.jpg" />
    </div>
  )
}

export default About;
