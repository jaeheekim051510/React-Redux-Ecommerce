import React from 'react';
import { Link } from "react-router-dom";


let Navbar = () => 
    <div>
        <Link to="/">Home</Link>
        <Link to="/categories/clothes">Clothes</Link>
        <Link to="/categories/prints">Prints</Link>
        <Link to="/categories/crafts">Crafts</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Log In</Link>
    </div>

export default Navbar;