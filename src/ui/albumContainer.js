import React from 'react'
import { Link } from 'react-router'
import { getData, addAlbum } from 'apis/api'
import store from 'store'

const AlbumsContainerData = React.createClass({
	getInitialState: function() {
		return {
			albums: []
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
	},

	componentWillUnmount: function() {
		this.unsubscribe()
	},

	render: function() {
		return (
			<AlbumsLayout albums={this.state.albums} />
		)
	}
})

const AlbumsLayout = React.createClass({
	addAlbum: function() { 
		var obj = {
			album_label: "",
			album_cover_pic: ""
		}

		addAlbum(obj)
		console.log('params', this.props.params)
	},	

	render: function() {
		return (
		<div id="albumsContainer">
			<div id="albumHeader">Jamie's Gothic Photo Album</div>
			<div id="albumContainer">
				<div className="albumRow">
					{this.props.albums.map(function(item) {
							return (
							<Link key={"album" + item.id} to={"/gallery/" + item.id}>
								<div key={"album" + item.id} className="albumThumb">
									<img src={item.album_cover_pic}/>
									<div className="albumFooter">{item.album_label}</div>	
								</div>
							</Link>
							)
						})}
				</div>
			</div>
			<a className="addButton" onClick={() => this.addAlbum()}><div>Add Album</div></a>
		</div>

		)
	}
})

export default AlbumsContainerData 


// href={"http://localhost:8001//newAlbums/" + this.props.params.id}


