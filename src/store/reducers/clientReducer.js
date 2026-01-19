import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
} from '../actions/clientActions';

const savedUser = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user')) || {};
const initialState = {
  user: savedUser,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: '',
  language: '',
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      // Kullanıcıyı hem localStorage hem sessionStorage'a yaz
      localStorage.setItem('user', JSON.stringify(action.payload));
      sessionStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    }

    case SET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };

    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

export default clientReducer;
