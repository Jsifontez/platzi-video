import React from 'react'
import './video-player-layout.css'

const VideoPlayer = props => {
	return (
		<div className="VideoPlayer">
			{props.children}
		</div>
	)
}

export default VideoPlayer