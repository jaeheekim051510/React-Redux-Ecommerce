
import { combineReducers } from 'redux';
import productData from './ProductReducer';

const reducer = combineReducers({
    product: productData
});


export default reducer;