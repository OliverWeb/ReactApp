/*
* 1.将所用到的reducer进行合并combineReducers,并返回
* 2.如果没有的话,放回一个空的{}
* */
import  {combineReducers} from 'redux'
import {user} from './redux/user.redux'
export default combineReducers({user})