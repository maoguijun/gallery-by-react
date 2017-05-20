require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class GalleryByReactApp extends React.Component {
  render() {
    return (
      <section className = "state">
        <section className = "img-sec">

        </section>
        <nav className = "controller-nav"></nav>
      </section> 
    );
  }
}

module.exports = GalleryByReactApp;