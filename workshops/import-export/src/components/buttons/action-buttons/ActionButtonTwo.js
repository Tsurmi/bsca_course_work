import React from 'react';

const SuperDuperButton  = (props) => <button onClick={props.superDuperAction}className="super-duper-button">{"I'm the best!"}</button>
const superDuperAction = () => alert('Holy Cow!')

export {SuperDuperButton, superDuperAction}
