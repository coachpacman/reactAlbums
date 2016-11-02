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

	update: function(e) {
		var obj = this.getInitialState
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
			this.goBack
		})
	},

	goBack: function() { 
		hashHistory.push(`/gallery/${this.props.params.id}`)
	},

	render: function() {
		return (
			<div>	
				<input className="formInput" id="url" onChange={this.update} type="text" placeholder="photo URL"></input>
				<button onClick={this.addPhoto}>Submit</button>
				<button id="goBack" onClick={this.goBack}>Cancel</button>			
			</div>
		)
	}

})

export default PhotoForm