import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  form: formReducer,
  user: userReducer,
  theme: themeReducer
});
