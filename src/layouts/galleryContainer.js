import React from 'react'
import { Link } from 'react-router'
import { getAlbumData, getData } from 'apis/api'
import store from 'store'


const GalleryContainer = React.createClass({
	getInitialState: function() {
		return {
			albums: []	
			// currentAlbumLabel: "",
			// photos: []
		}
	},
	
	componentWillMount: function() {
		getData()

		this.unsubscribe=store.subscribe(() => {
			const appState = store.getState()
			this.setState({
				albums: appState.albums
			})
		})

		getAlbumData(this.props.params.albumId)

		this.unsubscribe=store.subscribe(() => {
			const appState = store.getState()
			this.setState({
				currentAlbumLabel: appState.currentAlbumLabel,
			})
		})
		console.log("application state", store.getState())
	},

	componentWillUnmount: function() {
		this.unsubscribe()
	},

	render: function() {
		return (
			<PhotoGallery albums={this.state.albums} currentAlbumLabel={this.state.currentAlbumLabel}/>
		)	
	}
})

const PhotoGallery = React.createClass({
	// rerender: function() {
	// 	this.props.rerender() 
	// },

	render: function() {
		return (
			<div id="galleryContainer">
				<div id="gallerySideBar">
					<div id="gallerySideButtons">
						<Link key="gallery button home link" to="/">
								<div key="gallery button home" className="gallerySideBarButton">Home</div>	
						</Link>
						{this.props.albums.map(function(item) {
							return(
								<Link key={"gallery button link" + item.id} to={"/gallery/" + item.id}>
									<div key={"gallery button" + item.album_label} className="gallerySideBarButton">{item.album_label}</div>	
								</Link>
								)
							}
						)}
					</div>
				</div>
				<div id="galleryContent">
					<div id="galleryHeader">{this.props.currentAlbumLabel}</div>
				</div>
			</div>
		)
	}
})

export default GalleryContainer

//PROPS FOR ALBUM HEADER LABEL AND PHOTOS
// photos={this.state.photos} currentAlbumLabel={this.state.currentAlbumLabel}

//JSX FOR RENDERING PHOTOS AND ALBUM HEADER LABEL

// asdf

// <div className="galleryRow">
// 		{this.props.photos.map(function(item) {
// 							return (
// 								<Link key={"gallery button link" + item.id}to={"/gallery/photo/" + item.id}>
// 									<div key={"photo" + item.id} className="photoThumb"><img src={item.url}/>
// 										<div className="photoFooter">#{item.id}</div>
// 									</div>
// 								</Link>
// 							)
// 						})}					
// </div>	
	
