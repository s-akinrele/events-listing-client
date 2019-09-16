import axios from 'axios'

import {asyncActions} from '../utils/asynUtil'
import {LOG_IN} from '../actionTypes/userActionType'
import {authConstant} from '../constants/Constants'

export const loginUser = (user) => dispatch => {
  console.log(user, 'in here')
  console.log(authConstant.LOG_IN, 'auth')
  dispatch(asyncActions(LOG_IN).loading(true))

  axios.post(authConstant.LOG_IN, user)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('auth_token', response.data.auth_token);
        dispatch(asyncActions(LOG_IN).success(response.data))
        dispatch(asyncActions(LOG_IN).loading(false))
      }
    })
    .catch(error => {
      dispatch(asyncActions(LOG_IN).failure(true, error.response.data.message))
      dispatch(asyncActions(LOG_IN).loading(false))
    });
}
