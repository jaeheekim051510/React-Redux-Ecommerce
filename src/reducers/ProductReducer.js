export let productReducer = (state, action) => ({
    ...state,
    products: state.products.concat([action.payload])
});

