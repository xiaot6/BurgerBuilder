import React from 'react';
import "./BuildControl.css"

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">
            {props.label} 
            <button className = "Less">Less</button>
            <button className = "More">More</button>
        </div>
    </div>
);

export default buildControl;