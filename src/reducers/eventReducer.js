import {asyncActionName} from '../utils/asynUtil'
import {CREATE_EVENT, VIEW_EVENT, VIEW_ALL_EVENTS, REGISTER_EVENT} from '../actionTypes/eventActionType'

const initialState = {events: [], event: {}, loading: false, error: false, errorMessage: null}

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
      return {...state, event: action.payload}

    case asyncActionName(VIEW_EVENT).loading:
      return {...state, loading: action.payload}

    case asyncActionName(VIEW_ALL_EVENTS).failure:
      return {...state, error: action.payload.status, errorMessage: action.payload.error}

    case asyncActionName(VIEW_ALL_EVENTS).success:
      return {...state, events: action.payload}

    case asyncActionName(VIEW_ALL_EVENTS).loading:
      return {...state, loading: action.payload}

    case asyncActionName(REGISTER_EVENT).failure:
      return {...state, error: action.payload.status, errorMessage: action.payload.error}

    case asyncActionName(REGISTER_EVENT).success:
      return {...state, event: action.payload}

    case asyncActionName(REGISTER_EVENT).loading:
      return {...state, loading: action.payload}

    default:
      return state
  }
}

export default eventReducer
