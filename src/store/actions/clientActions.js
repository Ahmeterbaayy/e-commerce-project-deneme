import api from '../../services/api';

// Action Types
export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

// Action Creators
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

// Thunk Action Creator for fetching roles
export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const response = await api.get('/roles');
      dispatch(setRoles(response.data));
      return response.data;
    } catch (error) {
      console.error('Error fetching roles:', error);
      throw error;
    }
  };
};

// Thunk Action Creator for login
export const loginUser = (credentials, rememberMe = false) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/login', credentials);
      const { token, ...userData } = response.data;
      
      if (token) {
        localStorage.setItem('token', token);
        api.defaults.headers.common['Authorization'] = token;
      }
      // Kullanıcıyı hem localStorage hem sessionStorage'a kaydet
      localStorage.setItem('user', JSON.stringify(userData));
      sessionStorage.setItem('user', JSON.stringify(userData));
      dispatch(setUser(userData));
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };
};

// Thunk Action Creator for logout
export const logoutUser = () => {
  return (dispatch) => {
    // Remove token and user from localStorage/sessionStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    // Clear user from store
    dispatch(setUser({}));
  };
};

// Thunk Action Creator for verifying token
export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    
    try {
      // Token is already added to headers by interceptor
      const response = await api.get('/verify');
      // Kullanıcıyı hem localStorage hem sessionStorage'a kaydet
      localStorage.setItem('user', JSON.stringify(response.data));
      sessionStorage.setItem('user', JSON.stringify(response.data));
      dispatch(setUser(response.data));
      // Renew token if backend provides a new one
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error('Token verification failed:', error);
      // Remove invalid token and user from localStorage/sessionStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      dispatch(setUser({}));
      throw error;
    }
  };
};
