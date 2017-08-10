import React from 'react';

const SuperButton = (props) => <button onClick={props.superAction}className="super-button">{"I'm amazing!"}</button>
const superAction = () => alert('Wow!')

export {SuperButton, superAction}
