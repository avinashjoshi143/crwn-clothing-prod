import {createSelector} from 'reselect';

const selectCart = state => state.cart;


// this is memoized function that is cached, when we use createSelector it becomes a memoized function
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems  
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator,cartItem) => accumulator + cartItem.quantity , 0)
);

