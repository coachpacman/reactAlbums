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
				
					<div className="albumThumb">
						<img src="https://imgs-tuts-dragoart-386112.c.cdn77.org/how-to-draw-a-gothic-puppy_1_000000018934_5.png"/>
						<div className="albumFooter">Animals</div>
					</div>
					<div className="albumThumb">
						<img src="https://s-media-cache-ak0.pinimg.com/236x/13/b8/35/13b8356a8dc3855d5398fd5ebc40fc26.jpg"/>
						<div className="albumFooter">Angels</div>
					</div>
					<div className="albumThumb">
						<img src="https://imgs-tuts-dragoart-386112.c.cdn77.org/how-to-draw-a-gothic-rose_1_000000022325_5.png"/>
						<div className="albumFooter">Roses</div>
					</div>
				

					<div className="albumThumb">
						<img src="https://s-media-cache-ak0.pinimg.com/236x/24/a5/2b/24a52bc97b240174d80b77fd7017a30a.jpg"/>
						<div className="albumFooter">Elves</div>
					</div>
					<div className="albumThumb">
						<img src="https://lh5.googleusercontent.com/-eZU5h6PTWfM/TXrqMl8gBBI/AAAAAAAAABs/QAYk5CeMhN8/s1600/butterfly.jpg"/>
						<div className="albumFooter">butterfly</div>
					</div>
					<div className="albumThumb">
						<div className="albumFooter">Architecture</div>
					</div>


				</div>
			</div>
		</div>

		)
	}
})

export default AlbumsContainerData 