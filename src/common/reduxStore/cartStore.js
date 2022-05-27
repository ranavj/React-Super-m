import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addProduct: (state, action) => {
            const productExist = state.cart.find(product => product.id === action.payload.id);            
            if(productExist) productExist.quantity++;
            else{
                state.cart.push({...action.payload,quantity: 1})
            }
        },
        
        removeProduct: (state, action) => {
           const getProduct = state.cart.findIndex(product => product.id === action.payload.id);
           state.cart.splice(getProduct)
        }
        
    }
});

const store = configureStore({
    reducer: cartSlice.reducer
});

const { addProduct, removeProduct } = cartSlice.actions;

const addCartTotal = (state) => {
    return state.cart.reduce((total, acum) => {
        return   total += acum.quantity
    }, 0)
}

const getTotalPrice = (state) => {
    return state.cart.reduce((total, acum) => total += acum.price * acum.quantity, 0)
}


export { addProduct, removeProduct, store, addCartTotal, getTotalPrice };