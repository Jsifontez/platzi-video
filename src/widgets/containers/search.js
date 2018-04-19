import React, { Component } from 'react'
import Search from '../components/search'

import { connect } from 'react-redux'

import { searchEntities } from '../../actions/index'

import { bindActionCreators } from 'redux'

class SearchContainer extends Component {

	state={
		value: 'Luis Fonsi'
	}

	handleSubmit = (event) => {
		event.preventDefault()
		// console.log(this.input.value, 'submit')
		this.props.actions.searchEntities(this.input.value)
	}

	setInputRef = element => {
		this.input = element
	}

	handleInputChange = event => {
		this.setState({
			value: event.target.value
		})
	}

	render() {
		return (
			<Search 
				handleSubmit={this.handleSubmit}
				setRef={this.setInputRef}
				handleChange={this.handleInputChange}
				value={this.state.value}
			/>
		);
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators({searchEntities}, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(SearchContainer)