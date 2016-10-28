import React from 'react'
import { Link } from 'react-router'
import { getAlbumData, getData } from 'apis/api'


const GalleryContainer = React.createClass({
	getInitialState: function() {
		return {
			albums: [],
			currentAlbumLabel: "",
			photos: []
		}
	},
	
	componentWillMount: function() {
		this.rerender()
	},

	rerender: function() {
		
		getData().then(resp => {
			this.setState({
				albums: resp.data
			})
			
		})

		getAlbumData(this.props.params.albumId).then(resp => {			
			this.setState({
				currentAlbumLabel: resp.data.album_label,
				photos: resp.data.photos
			})
		})
	},

	render: function() {
		return (
			<PhotoGallery rerender={this.rerender} photos={this.state.photos} currentAlbumLabel={this.state.currentAlbumLabel} albums={this.state.albums}/>
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
						{this.props.albums.map(item => {
							return(
								<Link key={"gallery button link" + item.id} to={"/gallery/" + item.id}>
									<div onClick={this.props.rerender} key={"gallery button" + item.album_label} className="gallerySideBarButton">{item.album_label}</div>	
								</Link>
								)
							}
						)}
					</div>
				</div>
				<div id="galleryContent">
					<div id="galleryHeader">{this.props.currentAlbumLabel}</div>
					<div className="galleryRow">
						{this.props.photos.map(function(item) {
							return (
								<Link key={"gallery button link" + item.id}to={"/gallery/photo/" + item.id}>
									<div key={"photo" + item.id} className="photoThumb"><img src={item.url}/>
										<div className="photoFooter">#{item.id}</div>
									</div>
								</Link>
							)
						})}		
					</div>	
				</div>
			</div>
		)
	}
})

export default GalleryContainer



