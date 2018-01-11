/*
* createStore(reducer)  将多个reducer进行合并
*将合并所需要reducer进行引入进行合并 返回一个reducer
*
* */

import  {combineReducers} from 'redux'
import {counter} from './index.redux.js'
import {auth} from './Auth.redux.js'
export default combineReducers({counter,auth})