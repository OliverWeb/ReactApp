/*
* 1.将所用到的reducer进行合并combineReducers,并返回
*  
* 2.如果没有的话,放回一个空的{}
* */
import {combineReducers} from 'redux'
import {user} from './redux/user.redux'
import {chartuser} from './redux/chartuser.redux'
import {chat} from './redux/chat.redux'

export default combineReducers({user, chartuser, chat})