import React from 'react'
import { hashHistory, Link } from 'react-router'
import store from 'store'


const AlbumForm = React.createClass({
	goBack: function(e) {	
		e.preventDefault()
		hashHistory.goBack()
	},

	render: function() {
		return (
			<div>
				<div className="addButton">test</div>
				<button id="goBack" onClick={this.goBack}>Go Back</button>
			</div>
		)
	}
})




export default AlbumForm