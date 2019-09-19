import axios from 'axios'

import {asyncActions} from '../utils/asynUtil'
import {CREATE_EVENT, VIEW_EVENT, VIEW_ALL_EVENTS} from '../actionTypes/eventActionType'
import {eventsConstant, viewEventConstant} from '../constants/Constants'
import {token} from '../helpers/AuthHelper'

export const createEvent = event => dispatch => {
  dispatch(asyncActions(CREATE_EVENT).loading(true))

  axios.post(eventsConstant.CREATE_EVENT, event, {headers: {Authorization: token()}})
    .then(response => {
      if (response.status === 201) {
        dispatch(asyncActions(CREATE_EVENT).success(response.data))
        dispatch(asyncActions(CREATE_EVENT).loading(false))
      }
    })
    .catch(error => {
      dispatch(asyncActions(CREATE_EVENT).failure(true, error.response.data.message))
      dispatch(asyncActions(CREATE_EVENT).loading(false))
    });
}

export const viewEvent = id => dispatch => {
  dispatch(asyncActions(VIEW_EVENT).loading(true))

  axios.get(viewEventConstant(id).VIEW_EVENT, { id, headers: {Authorization: token()}})
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(VIEW_EVENT).success(response.data))
        dispatch(asyncActions(VIEW_EVENT).loading(false))
      }
    })
    .catch(error => {
      dispatch(asyncActions(VIEW_EVENT).failure(true, error.response.data.message))
      dispatch(asyncActions(VIEW_EVENT).loading(false))
    });
}

export const viewAllEvents = () => dispatch => {
  dispatch(asyncActions(VIEW_ALL_EVENTS).loading(true))

  axios.get(eventsConstant.VIEW_ALL_EVENTS)
    .then(response => {
      console.log(response, 'response')
      if (response.status === 200) {
        dispatch(asyncActions(VIEW_ALL_EVENTS).success(response.data))
        dispatch(asyncActions(VIEW_ALL_EVENTS).loading(false))
      }
    })
    .catch(error => {
      dispatch(asyncActions(VIEW_ALL_EVENTS).failure(true, error.response.data.message))
      dispatch(asyncActions(VIEW_ALL_EVENTS).loading(false))
    })
}