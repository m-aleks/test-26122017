import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import getList from '../../actions/GetListActions'
import { Link } from 'react-router'

class BooksList extends Component {
	componentWillMount(){
		this.props.getList('books')
	}
	render(){
		const list = this.props.list
		let books = ''
		if(list.items.length && list.items[0].author){
			books = list.items.map((book) => {
				const booklink = '/books/' + book.id
				const authorlink = '/authors/' + book.author.id
				return(
					<li key = {book.id}>
						<Link to = {booklink} >{book.title}</Link>
						.&nbsp;
						<Link to = {authorlink} >{book.author.name}</Link>
					</li>
				)		
			})
		}
		// console.log(this.props.route.myprops)
		return (
			<div>
				<header  className='header panel'>
					<h1 className='header_heading'>Books</h1>
				</header>
				<ul>
					{books}
				</ul>
				
			</div>
		)
	}
}
const mapStateToBooksListProps = (state)=>{
	return{
		list: state.list
	}
}
const mapDispatchToBooksListProps = (dispatch)=>{
	return({
		getList: bindActionCreators(getList, dispatch)
	})
}
export default connect(mapStateToBooksListProps, mapDispatchToBooksListProps)(BooksList)