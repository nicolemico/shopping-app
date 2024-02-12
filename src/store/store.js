import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const initialState = {
  userId: 1,
  cart: [],
  cartStatus: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'cart/setCart': {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case 'cart/addToCart': {
      const foundCartItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId,
      );
      if (foundCartItemIndex > -1) {
        const cartItem = state.cart[foundCartItemIndex];
        cartItem.quantity += 1;
        state.cart.splice(foundCartItemIndex);
        return {
          ...state,
          cart: [
            ...state.cart,
            cartItem,
          ],
        };
      }
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload,
        ],
      };
    }
    case 'cart/setCartStatus': {
      return {
        ...state,
        cartStatus: !state.cartStatus,
      };
    }
    default:
      return state;
  }
}

const composedEnhancers = composeWithDevTools();
export default createStore(reducer, initialState, composedEnhancers);
