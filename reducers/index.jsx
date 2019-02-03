import { combineReducers } from 'redux'
import groupName from './group'
import filter from './filter'
import groups from './groups'
export default combineReducers({
  groupName,
  groups,
  filter,
})