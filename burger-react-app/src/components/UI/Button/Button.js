import React from 'react';

import './Button.css';

const button = (props) => (
    <button
            style={{
            color: props.disabled ? "#ccc" : 
                props.btnType.localeCompare("Success") === 0 ? "#5C9210" : "#944317"
                
            }}
            className="Button"
        onClick={props.clicked}
        disabled={props.disabled}
    >{props.children}</button>
    
);

export default button;