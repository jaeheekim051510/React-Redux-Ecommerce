import React from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Homepage from './components/HomePage/index'
import Category from './components/Category/index';
import Cart from './components/Cart/index';
import Login from './components/Login/index';
import AllCategory from './components/AllCategories/index';
import ProductsPage from './components/ProductsPage/index';

let App= () =>
    <Router>
        <div className="App">
        <div class="Nav">
            <Navbar />
        </div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/categories" component={AllCategory} />
            <Route path="/categories/:category" component={Category} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
        </div>
    </Router>

export default App;