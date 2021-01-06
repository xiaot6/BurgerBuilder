import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from "../../../hoc/Aux/Aux";


const sideDrawer = (props) => {
    //...
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        
            <div className="SideDrawer"
                onClick={props.closed}
                style={{
                    transform: props.open ? "translateX(0)" : "translateX(-100%)"
                }}>
                <div className= "LogoSideDrawer">
                    <Logo/>
                </div>


                {/* <Logo height="11%"/> */}
                
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;