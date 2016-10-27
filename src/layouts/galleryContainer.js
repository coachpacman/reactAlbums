import React from 'react'
import { Link } from 'react-router'
import { getAlbumData, getData } from 'apis/api'


const GalleryContainer = React.createClass({
	getInitialState: function() {
		return {
			albumLabels: [],
			currentAlbumLabel: "",
			photos: []
		}
	},
	
	componentWillMount: function() {
		getData().then(resp => {
			this.setState({
				albumLabels: resp.data
			})
			console.log(resp.data)
		})


		getAlbumData(this.props.params.albumId).then(resp => {			
			this.setState({
				currentAlbumLabel: resp.data.album_label,
				photos: resp.data.photos
			})
			console.log(this.state)
		})
	},

	render: function() {
		return (
			<PhotoGallery photos={this.state.photos} currentAlbumLabel={this.state.currentAlbumLabel} albumLabels={this.state.albumLabels}/>
		)
	}
})

const PhotoGallery = React.createClass({
	render: function() {
		return (
			<div id="galleryContainer">
				<div id="gallerySideBar">
					<div id="gallerySideButtons">
						{this.props.albumLabels.map(function(item) {
							return(
								<Link key={"gallery button link" + item.id}to={"/gallery/photo/" + item.id}>
									<div key={"gallery button" + item.album_label} className="gallerySideBarButton">{item.album_label}</div>	
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
								<div key={"photo" + item.id} className="photoThumb"><img src={item.url}/>
									<div className="photoFooter">#{item.id}</div>
								</div>
							)
						})}		
					</div>	
				</div>
			</div>
		)
	}
})

export default GalleryContainer


