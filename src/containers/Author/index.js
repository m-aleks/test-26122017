import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getAuthorInfo from '../../actions/AuthorActions'
import { getIdFromPathname } from '../../enhancers/UrlParcer'
import { Link } from 'react-router'

class Author extends Component {
	componentWillMount(){
		const id = getIdFromPathname()
		this.props.getAuthorInfo(id)
	}
	render(){
		const authorInfo = this.props.authorInfo
		let books = ''
		if(authorInfo.books) {
			books =  authorInfo.books.map((book) => {
				const bookLink = '/books/' + book.id
				return (
						<li key = {book.id}><Link to = {bookLink}>{book.title}</Link></li>
				)
			})
		}
		
		return (
			<div>
				<header className='header panel'>
					<h2 className='header_heading'>Author info</h2>
					<h3 className='header_subheading'>{authorInfo.info.name}</h3>
				</header>
				<ul>
					{books}
				</ul>
				
			</div>
		)
	}
}

const mapStateToAuthorProps = (state)=>{
	return{
		authorInfo: state.author
	}
}
const mapDispatchToAuthorProps = (dispatch)=>{
	return({
		getAuthorInfo: bindActionCreators(getAuthorInfo, dispatch)
	})
}
export default connect(mapStateToAuthorProps, mapDispatchToAuthorProps)(Author)	