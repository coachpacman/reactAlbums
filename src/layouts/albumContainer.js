import React from 'react'
import { Link } from 'react-router'
import { getData } from 'apis/api'

const AlbumsContainerData = React.createClass({
	getInitialState: function() {
		return {
			albums: []
		}
	},

	componentWillMount: function() {
		getData().then( resp => {
			this.setState({
				albums: resp.data
			})
			console.log(resp.data)
		})
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
		</div>

		)
	}
})

export default AlbumsContainerData 



