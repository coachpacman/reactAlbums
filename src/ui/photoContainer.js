import React from 'react'
import { Link, hashHistory } from 'react-router'
import store from 'store'
import { getPhoto } from 'apis/api'


const PhotoContainer = React.createClass({
	getInitialState: function() {
		return {
			currentPhoto: "",
			currentPhotoId: ""
		}
	},

	componentWillMount: function() { 
		getPhoto(this.props.params.photoId) 
		
		this.unsubscribe = store.subscribe(() => {
			this.setState({
				currentPhoto: store.getState().currentPhoto,
				currentPhotoId: store.getState().currentPhotoId
			})
		})
	},

	componentWillUnmount: function() {
		this.unsubscribe()
	},

	render: function() {
		return (
			<CurrentPhoto currentPhoto={this.state.currentPhoto} currentPhotoId={this.state.currentPhotoId}/>
		)
	}
})

const CurrentPhoto = React.createClass({
	goBack: function(e) {
		e.preventDefault()
		hashHistory.goBack()
	},
	
	render: function(){
		return (
			<div id="photoContainer">
				<div id="photoContainerHeader">Photo #{this.props.currentPhotoId}</div>
				<div id="photo"><img src={this.props.currentPhoto}/></div>
				<button id="goBack" onClick={this.goBack}>Go Back</button>
			</div>
		)
	}
})

export default PhotoContainer