import React from 'react';

import './Button.css';

const button = (props) => (
    <button
            className="Button"
            style={{
                color: props.btnType.localeCompare("Success")  === 0 ? "#5C9210" : "#944317"
            }}
        onClick={props.clicked}>{props.children}</button>
    
);

export default button;