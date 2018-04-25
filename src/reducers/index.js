import { productData } from '../json/products';
import { addToCart, removeFromCart } from '../actions/actions';
import { productReducer } from './ProductReducer';

const initialState = {
    products: productData
};

let reducers = {
    [addToCart]: productReducer,
    [removeFromCart]: productReducer
};

let fallbackReducer = state => state;

let reducer = (oldState = initialState, action) => {
    let babyReducer = reducers[action.type];
    babyReducer = babyReducer || fallbackReducer;
    let newState = babyReducer(oldState, action);
    return newState;
};

export default reducer;