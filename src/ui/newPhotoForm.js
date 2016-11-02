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
			<div>	
				<input className="formInput" id="url" onChange={this.update} type="text" placeholder="photo URL"></input>
				<button onClick={this.addPhoto}>Submit</button>
			</div>
		)
	}

})

export default PhotoForm

