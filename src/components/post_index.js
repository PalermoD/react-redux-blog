import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
		console.log('call actiion creator to fecth data');
	}

	render() {
		return (
               <div>List Of Posts</div>
			);
	}
}


// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch );
// }

export default connect(null, { fetchPosts })(PostIndex);