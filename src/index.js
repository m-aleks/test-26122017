import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
//import {createStore} from 'redux'
import configureStore from './store/configureStore'
// import './style/app.css'
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Router, browserHistory } from 'react-router'
import {routes} from './routes'

export const store = configureStore();
// render(
// 	<Provider store = {store}>
// 		<App/>
// 	</Provider>,
// 	document.getElementById('root')
// );
render(
	<Provider store = {store}>
		<Router history = {browserHistory} routes = {routes} />
	</Provider>,
	document.getElementById('root')
);