import { combineReducers } from 'redux'
import pages from './pages'
import contact from './contact'
import position from './position'
import messageContent from './messageContent'

export default combineReducers({
  contact,
  position,
  messageContent,
  pages,
})
