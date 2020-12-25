import React from 'react';

import './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <a 
            href={props.link} 
            style={{
                            backgroundColor: props.active ? "#8F5C2C" : "null",
                            borderBottom: props.active ? "4px solid #40A4C8" : "null",
                            color: props.active ? "white" : "null"
                            }}
        >
            
            {props.children}
        </a>
    </li>
);

export default navigationItem;