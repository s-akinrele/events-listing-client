import {asyncActionName} from '../utils/asynUtil'
import {CREATE_EVENT, VIEW_EVENT} from '../actionTypes/eventActionType'

const initialState = {event: {}, loading: false, error: false, errorMessage: null}

const eventReducer = (state=initialState, action) => {
  switch (action.type) {
    case asyncActionName(CREATE_EVENT).failure:
      return {...state, error: action.payload.status, errorMessage: action.payload.error}

    case asyncActionName(CREATE_EVENT).loading:
      return {...state, loading: action.payload}

    case asyncActionName(CREATE_EVENT).success:
      return {...state, event: action.payload.event}

    case asyncActionName(VIEW_EVENT).failure:
      return {...state, error: action.payload.status, errorMessage: action.payload.error}

    case asyncActionName(VIEW_EVENT).success:
      return {...state, event: action.payload.event}

    case asyncActionName(VIEW_EVENT).loading:
      return {...state, loading: action.payload}

    // case SIGN_OUT:
    //   return {...initialState}

    default:
      return state
  }
}

export default eventReducer
