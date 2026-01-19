import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_COUNT,
  TOGGLE_CART_ITEM,
} from '../actions/shoppingCartActions';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  payment: JSON.parse(localStorage.getItem('payment')) || {},
  address: JSON.parse(localStorage.getItem('address')) || {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case SET_PAYMENT:
      localStorage.setItem('payment', JSON.stringify(action.payload));
      return {
        ...state,
        payment: action.payload,
      };

    case SET_ADDRESS:
      localStorage.setItem('address', JSON.stringify(action.payload));
      return {
        ...state,
        address: action.payload,
      };

    case ADD_TO_CART: {
      const { product } = action.payload || {};
      if (!product || !product.id) {
        // Geçersiz ürün, ekleme
        return state;
      }
      const existingItemIndex = state.cart.findIndex(
        (item) => item && item.product && item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Product already in cart, increase count
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          count: updatedCart[existingItemIndex].count + 1,
        };
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // New product, add to cart
        const updatedCart = [
          ...state.cart,
          {
            count: 1,
            checked: true,
            product: product,
          },
        ];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      }
    }

    case REMOVE_FROM_CART: {
      const { productId } = action.payload;
      const updatedCart = state.cart.filter((item) => item.product.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case UPDATE_CART_ITEM_COUNT: {
      const { productId, count } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.product.id === productId ? { ...item, count } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case TOGGLE_CART_ITEM: {
      const { productId } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.product.id === productId
          ? { ...item, checked: !item.checked }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case 'CLEAR_CART': {
      localStorage.setItem('cart', JSON.stringify([]));
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
};

export default shoppingCartReducer;
