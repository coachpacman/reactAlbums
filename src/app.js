import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import 'assets/styles/style.css'

// Layouts
import Container from 'layouts/container';

//Content
import AlbumContainer from 'ui/albumContainer'
import GalleryContainer from 'ui/galleryContainer'
import PhotoContainer from 'ui/photoContainer'
import NewAlbum from 'ui/newAlbumForm'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={Container}>
  		<Route path="/" component={AlbumContainer}/>
  		<Route path="/gallery/:albumId" component={GalleryContainer}/>
  		<Route path="/gallery/photo/:photoId" component={PhotoContainer}/>
  		<Route path="/newAlbum" component={NewAlbum}/>
    </Route>
  </Router>
), document.getElementById('app'));