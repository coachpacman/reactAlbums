import React from 'react'
import { hashHistory, Link } from 'react-router'
import store from 'store'
import { updateAlbum } from 'apis/api'




const AlbumForm = React.createClass({

	getInitialState: function() {
		return {
			album_label: '',
			album_cover_pic: ''
		}
	},	

	update: function(e) {
		var obj = this.state
		var id = e.target.id
		obj[id] = e.target.value

		this.setState(obj);
	},

	
	updateAlbum: function() { 
		var obj = {
			album_label: this.state.album_label,
			album_cover_pic: this.state.album_cover_pic
		}
		var id = this.props.params.id
		updateAlbum(id, obj).then(resp => {
				hashHistory.push(`/gallery/${this.props.params.id}`)
		})	


	}, 

	// updatePhotosAPI: function() { 
	// 	var obj = {
	// 		url: this.state.url

	// 	}

	// 	addPhotos(obj).then(function(resp) {
	// 		hashHistory.push('/')
	// 	})
	// },

	postToAPI: function() { 
		this.updateAlbum()
		// this.updatePhotosAPI()
		// console.log(this.state)
	},

	render: function() {
		return (
			<div>
				<input className="formInput" id="album_label" onChange={this.update} type="text" placeholder="Album Name"></input>
				<input className="formInput" id="album_cover_pic" onChange={this.update} type="text" placeholder="Album Cover Pic URL"></input>
				<button onClick={this.postToAPI}>Submit</button>
				<button id="goBack" onClick={this.goBack}>Cancel</button>
			</div>
		)
	}
})




export default AlbumForm