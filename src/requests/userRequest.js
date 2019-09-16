import axios from 'axios'

import {asyncActions} from '../utils/asynUtil'
import {LOG_IN, SIGN_UP, SIGN_OUT} from '../actionTypes/userActionType'
import {authConstants} from '../constants/Constants'

export const loginUser = (user) => dispatch => {
  dispatch(asyncActions(LOG_IN).loading(true))

  axios.post(authConstants.LOG_IN, user)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.auth_token);
        dispatch(asyncActions(LOG_IN).success(response.data))
        dispatch(asyncActions(LOG_IN).loading(false))
      }
    })
    .catch(error => {
      dispatch(asyncActions(LOG_IN).failure(true, error.response.data.message))
      dispatch(asyncActions(LOG_IN).loading(false))
    });
}

export const signupUser = (user) => dispatch => {
  dispatch(asyncActions(SIGN_UP).loading(true))

  axios.post(authConstants.SIGN_UP, user)
    .then(response => {
      if (response.status === 201) {
        localStorage.setItem('authToken', response.data.auth_token);
        dispatch(asyncActions(SIGN_UP).success(response.data))
        dispatch(asyncActions(SIGN_UP).loading(false))
      }
    })
    .catch(error => {
      dispatch(asyncActions(SIGN_UP).failure(true, error.response.data.message))
      dispatch(asyncActions(SIGN_UP).loading(false))
    });
}

export const signOut = () => dispatch => {
  localStorage.removeItem('authToken')
  dispatch({type: SIGN_OUT})
}
