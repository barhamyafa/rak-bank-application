import users from '../apis/users';
import {
  SIGN_UP,
  TOGGLE_DARKTHEME
} from './types';

import history from '../history';

export const signIn = formValues => async (dispatch) => {
  const response = await users.post('/users', { ...formValues });

  dispatch({ type: SIGN_UP, payload: response.data });
  window.confirm("Success Log in");
  history.push('/');
};


export const toggleDarkTheme = () => ({
  type: TOGGLE_DARKTHEME,
});
