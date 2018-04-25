const ADD_TO_CART = 'ADD_TO_CART';
export let addToCart= (item) => ({ type: ADD_TO_CART, payload: item });
addToCart.toString = () => ADD_TO_CART;

const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export let removeFromCart= (item) => ({ type: REMOVE_FROM_CART, payload: item });
removeFromCart.toString = () => REMOVE_FROM_CART;
