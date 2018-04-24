import React from 'react';
import { Link } from "react-router-dom";


let Navbar = () => 
    <div>
        <Link to="/">Home</Link>
        <Link to="/clothes">Clothes</Link>
        <Link to="/prints">Prints</Link>
        <Link to="/crafts">Crafts</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Log In</Link>
    </div>

export default Navbar;