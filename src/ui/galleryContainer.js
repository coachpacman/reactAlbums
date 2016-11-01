import React from 'react'
import { Link } from 'react-router'
import { getAlbumData, getData, getPhotos } from 'apis/api'
import store from 'store'


const GalleryContainer = React.createClass({
	getInitialState: function() {
		return {
			albums: [],	
			currentAlbumLabel: "",
			photos: []
		}
	},
	
	componentWillMount: function() {
		getData()
		getAlbumData(this.props.params.albumId)
		getPhotos(this.props.params.albumId)

		this.unsubscribe = store.subscribe(() => {
			this.setState({
				albums: store.getState().albums,
				currentAlbumLabel: store.getState().currentAlbumLabel,
				photos: store.getState().photos
			});
		});
	},
	componentWillUnmount: function() {
		this.unsubscribe();
	},

	

	render: function() {
		
		return (
			<PhotoGallery albums={this.state.albums} currentAlbumLabel={this.state.currentAlbumLabel} photos={this.state.photos}/>
		)	
	}
})

const PhotoGallery = React.createClass({
	
	clickHandler:function(item) {
		getAlbumData(item.id);
		getPhotos(item.id);
	},

	render: function() {
		
		return (
			<div id="galleryContainer">
				<div id="gallerySideBar">
					<div id="gallerySideButtons">
						<Link key="gallery button home link" to="/">
								<div key="gallery button home" className="gallerySideBarButton">Home</div>	
						</Link>
						{this.props.albums.map(function(item){
							return(
								<Link key={"gallery button link" + item.id} to={"/gallery/" + item.id}>
									<div key={"gallery button" + item.album_label} className="gallerySideBarButton" onClick={() => this.clickHandler(item)}>{item.album_label}</div>	
								</Link>
								)
							}.bind(this)
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




	