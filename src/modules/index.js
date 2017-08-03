import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import authentication from './authentication'
import counter from './counter'
export default combineReducers({
  router: routerReducer,
  form:formReducer,
  authentication,
  counter,
})