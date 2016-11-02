import React from 'react'
import { hashHistory, Link } from 'react-router'
import store from 'store'
import { updateAlbum, addPhotos } from 'apis/api'




const AlbumForm = React.createClass({
	goBack: function(e) {	
		e.preventDefault()
		hashHistory.goBack()
	},

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

		var id = data

		console.log("imported data from db.json", id)

		updateAlbum(obj).then(function(resp) {
			hashHistory.push('/')
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
		this.updateAlbumsAPI()
		// this.updatePhotosAPI()
		// console.log(this.state)
	},

	render: function() {
		return (
			<div>
				<input className="formInput" id="album_label" onChange={this.update} type="text" placeholder="Album Name"></input>
				<input className="formInput" id="album_cover_pic" onChange={this.update} type="text" placeholder="Album Cover Pic URL"></input>
				<input className="formInput" id="url" onChange={this.update} type="text" placeholder="photo 1 url"></input>
				<button onClick={this.postToAPI}>Post to API</button>
				<button id="goBack" onClick={this.goBack}>Go Back</button>
			</div>
		)
	}
})




export default AlbumForm