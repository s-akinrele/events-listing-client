import {combineReducers} from 'redux'

import user from '../reducers/userReducer'
import event from '../reducers/eventReducer'

const rootReducer = combineReducers({
  user,
  event
})

export default rootReducer
