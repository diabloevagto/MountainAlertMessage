import { combineReducers } from 'redux'
import contact from './contact'
import position from './position'
import messageContent from './messageContent'

export default combineReducers({
  contact,
  position,
  messageContent,
})
