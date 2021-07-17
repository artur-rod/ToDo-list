import React from 'react';

import './Button.css';

const Button = ({children, onCLick}) => {
  return ( 
    <button className="button" onClick={onCLick} >{children}</button>
   );
}
 
export default Button;