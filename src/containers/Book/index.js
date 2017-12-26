import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getBookInfo from '../../actions/BookActions'
import { getIdFromPathname } from '../../enhancers/UrlParcer'
import { Link } from 'react-router'
import './styles.sass'

class Book extends Component {
	componentWillMount(){
		const id = getIdFromPathname()
		this.props.getBookInfo(id)
	}
	render(){
		// console.log('info=' + this.props.bookInfo.info)
		const info = this.props.bookInfo.info
		const authorLink = '/authors/' + info.author.id 
		return (
			<div>
				<header  className='header panel'>
					<h2 className='header_heading'>{info.title}</h2>
				</header>
				<div>
					<p>Author: <Link to = {authorLink}>{info.author.name}</Link></p>
					<p>Pages: {info.pages}</p>
					<p>Year: {info.year}</p>
				</div>
			</div>
		)
	}
}

const mapStateToBookProps = (state)=>{
	return{
		bookInfo: state.book
	}
}
const mapDispatchToBookProps = (dispatch)=>{
	return({
		getBookInfo: bindActionCreators(getBookInfo, dispatch)
	})
}
export default connect(mapStateToBookProps, mapDispatchToBookProps)(Book)	