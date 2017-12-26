import React, { Component } from 'react';
import NavLink from '../../components/NavLink'
import './styles.sass'

export default class App extends Component {
	render(){
		return (
			<div className='container'>
				<div className='header'>
					<h1  className='header_heading'>Simple React test</h1>
				</div>
				<div className='main_navbar'>
					<ul className='main_navbar_list'>
						<li className='main_navbar_item'><NavLink onlyActiveOnIndex={true} to='/' activeClassName = 'active'>Home</NavLink></li>
						<li className='main_navbar_item'><NavLink to='/books' activeClassName = 'active'>Books</NavLink></li>
						<li className='main_navbar_item'><NavLink to='/authors' activeClassName = 'active'>Authors</NavLink></li>
					</ul>
				</div>
				<div className='content'>
					{this.props.children}
				</div>
			</div>
		)
	}
}