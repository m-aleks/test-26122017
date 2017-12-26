import React from 'react'
import App from './containers/App'
import Home from './components/Home'
import BooksList from './containers/BooksList'
import AuthorsList from './containers/AuthorsList'
import Book from './containers/Book'
import Author from './containers/Author'
import NotFound from './components/NotFound'
import { Route, IndexRoute } from 'react-router'			

export const routes = (
	<div>
		<Route path = '/' component = {App} >
			<IndexRoute component = {Home} />
			<Route path = 'books' component = {BooksList} />
			<Route path = 'authors' component = {AuthorsList} />
			<Route path = 'books/:book' component = {Book} />
			<Route path = 'authors/:author' component = {Author} />
		</Route>
		<Route path = '*' component = {NotFound} />
	</div>
)