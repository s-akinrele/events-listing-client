import {asyncActionName} from '../utils/asynUtil'
import {LOG_IN, SIGN_UP, SIGN_OUT} from '../actionTypes/userActionType'

const initialState = {user: {}, authToken: null, loading: false, error: false, errorMessage: null}

const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case asyncActionName(LOG_IN).failure:
      return {...state, error: action.payload.status, errorMessage: action.payload.error}

    case asyncActionName(LOG_IN).loading:
      return {...state, loading: action.payload}

    case asyncActionName(LOG_IN).success:
      return {...state, authToken: action.payload.auth_token, user: action.payload.user}

    case asyncActionName(SIGN_UP).failure:
      return {...state, error: action.payload.status, errorMessage: action.payload.error}

    case asyncActionName(SIGN_UP).success:
      return {...state, authToken: action.payload.auth_token, user: action.payload.user}

    case asyncActionName(SIGN_UP).loading:
      return {...state, loading: action.payload}

    case SIGN_OUT:
      return {...initialState}

    default:
      return state
  }
}

export default userReducer
