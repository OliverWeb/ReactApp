import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import Dashboard from './Dashboard'
import Auth from './Auth'
import './config'
import 'antd-mobile/dist/antd-mobile.css';
/*对插件进行监控*/
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : () => {
	}
));

/* todo 入口文件   包裹整个app  */
ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route  path='/login' exact component={Auth} />
					<Route  path='/dashboard'  component={Dashboard}/>
				 {/*redirect 如果上面都没有命中的话,默认跳转dashboard*/}
					<Redirect to='/dashboard'/>
			</Switch>
		</BrowserRouter>
	</Provider>)
	, document.getElementById('root')
);
