import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { counter } from './index.redux'
import { Provider } from 'react-redux';
import App from './App'
import './01.learn.redux'
import Page from './context.demo'
// import Demo from "./demo";
ReactDOM.render(<Page/>,document.getElementById('root'));

/*const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'));*/





