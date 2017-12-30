import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './media.css';

class Media extends PureComponent {

	// state = {
	// 	author: 'Juan Sifontez'
	// }

	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		author: props.author
	// 	}
	// 	this.handleClick = this.handleClick.bind(this)
	// }

	// handleClick = (event) => {
	// 	// console.log(this.props.title)
	// 	this.setState({
	// 		author: 'Ricardo Celis'
	// 	})
	// }

	render() {
		const {title, cover, author} = this.props

		return (
			<div className="Media" onClick={this.props.handleClick}>
				<div className="Media-cover">
					<img
						src={cover}
						alt={title}
						width={260}
						height={160}
						className="Media-image"
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{author}</p>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio'])
}

export default Media
