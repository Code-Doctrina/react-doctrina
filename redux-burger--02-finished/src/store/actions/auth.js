import axios from 'axios';
import * as actionTypes from './actionsTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSucccess = (token, userId) => {
  return {
  type: actionTypes.AUTH_SUCCESS,
   idToken: token,
   userId: userId
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignup) => {
  console.log('-----------------------', email, password);
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGNQqLmsjRxTehT_V2RT2WetAT4eCciMA';
    if (!isSignup) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGNQqLmsjRxTehT_V2RT2WetAT4eCciMA';
    }
    axios
      .post(url, authData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(authSucccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
