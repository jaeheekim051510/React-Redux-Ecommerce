import React from 'react';
import { HashRouter as Router, Route} from "react-router-dom";

import App from './../App'
import Navbar from './Navbar';
import Clothes from './Clothes/index';
import Prints from './Prints/index';
import Crafts from './Crafts/index';
import Cart from './Cart/index';
import Login from './Login/index';

let Screen = () =>
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route path="/clothes" component={Clothes} />
            <Route path="/prints" component={Prints} />
            <Route path="/crafts" component={Crafts} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
        </div>
    </Router>

export default Screen;