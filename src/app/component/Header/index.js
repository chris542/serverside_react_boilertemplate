import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return [
        <NavLink key="Home" to="/" >Home</NavLink>,
        <NavLink key="Movio-Cinema" to="/movio-cinema" >Movio Cinema</NavLink>
    ];
}
export default Header;
