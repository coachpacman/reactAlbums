import React from 'react'
import { hashHistory } from 'react-router'
import { addPhotos } from 'apis/api'

const PhotoForm = React.createClass({
	getInitialState: function() { 
		return {
			url: "",
			albumId: ""
		}
	},

	goBack: function(e) {
		e.preventDefault()
		hashHistory.goBack()

	},	

	update: function(e) {
		var obj = this.state
		var id = e.target.id
		obj[id] = e.target.value

		this.setState(obj)
	},

	addPhoto: function() {
		var obj = {
			url: this.state.url,
			albumId: this.props.params.albumId
		}

		addPhotos(obj).then(function(resp) {
		})
	},


	render: function() {
		return (
			<div id="albumHeader" className="relative">Jamie's Gothic Photo Album
				<input className="formInput" id="url" onChange={this.update} type="text" placeholder="photo URL"></input>
				<button className="addButton photoForm" onClick={this.addPhoto}>Submit</button>
				<button className="photoBack" onClick={this.goBack}>Cancel</button>
			</div>
		)
	}

})

export default PhotoForm

