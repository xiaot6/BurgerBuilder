// import React from 'react';
// import { NavLink } from 'react-router-dom';

// import './NavigationItem.css';

// const navigationItem = ( props ) => (
//     <li className="NavigationItem">
//         <NavLink
//             to={props.link} 
//             style={{
//                 backgroundColor: props.active ? "#8F5C2C" : "null",
//                 borderBottom: props.active ? "4px solid #40A4C8" : "null",
//                 color: props.active ?  "#40A4C8" : "white"
//             }}
//             exact 
//             activeClassName = "active"
//         >
            
//             {props.children}
//         </NavLink>
//     </li>
// );

// export default navigationItem;

import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName="active">{props.children}</NavLink>
    </li>
);

export default navigationItem;