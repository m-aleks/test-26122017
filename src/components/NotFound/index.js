import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
	render () {
		return (
			<p>This page is not found. Return to <Link to='/'>home page</Link></p>
		)
	}
}