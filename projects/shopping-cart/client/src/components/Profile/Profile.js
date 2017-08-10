import React from 'react';

const Profile = (props) => {
  return(
    <div>
      <h1> { props.user.fName }</h1>
      <h3> { props.user.lName }</h3>
      <img src={ props.user.avatar } />
      <p> { props.user.email}</p>
    </div>
  )
}

export default Profile;
