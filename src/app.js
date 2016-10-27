import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import 'assets/styles/style.css'

// Layouts
import Container from 'layouts/container';
import AlbumContainer from 'layouts/albumContainer'
import GalleryContainer from 'layouts/galleryContainer'
import PhotoContainer from 'layouts/photoContainer'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={Container}>
  		<Route path="/" component={AlbumContainer}/>
  		<Route path="/gallery/:albumId" component={GalleryContainer}/>
  		<Route path="/gallery/photo/:photoId" component={PhotoContainer}/>
    </Route>
  </Router>
), document.getElementById('app'));