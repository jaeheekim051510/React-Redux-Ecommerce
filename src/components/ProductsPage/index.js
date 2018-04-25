
import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/index';


let ProductsPage = ({ products }) => {
    let renderEachProps = () => {
        return (
            products.map((product) => 
            <Product 
            name={product.name}
            price={product.price}
            key={product.id}
            />
            )
        )
        }
    return (
    <div>
        {renderEachProps()}
    </div>
    )
}

const mapStateToProps = (state) => {
    return { products: state.products };
};

export default connect (mapStateToProps)(ProductsPage)

