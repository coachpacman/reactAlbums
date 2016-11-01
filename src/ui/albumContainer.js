import React from 'react'
import { Link } from 'react-router'
import { getData } from 'apis/api'
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
			<Link className="addButton" to="/newAlbum"><div>Add Album</div></Link>
		</div>

		)
	}
})

export default AlbumsContainerData 



