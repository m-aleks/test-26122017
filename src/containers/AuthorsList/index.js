import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import getList from '../../actions/GetListActions'
import { Link } from 'react-router'

class AuthorsList extends Component {
	componentWillMount(){
		this.props.getList('authors')
	}
	render(){
		const list = this.props.list
		let authors = ''
		if(list.items.length){
			authors = list.items.map((author) => {
				const authorlink = '/authors/' + author.id
				return(
					<li key = {author.id}>
						<Link to = {authorlink} >{author.name}</Link>
					</li>
				)		
			})
		}
		console.log(list.items)
		return (
			<div>
				<header  className='header panel'>
					<h1 className='header_heading'>Authors</h1>
				</header>
				{authors}
			</div>
		)
	}
}

const mapStateToAuthorsListProps = (state)=>{
	return{
		list: state.list
	}
}
const mapDispatchToAuthorsListProps = (dispatch)=>{
	return({
		getList: bindActionCreators(getList, dispatch)
	})
}
export default connect(mapStateToAuthorsListProps, mapDispatchToAuthorsListProps)(AuthorsList)				