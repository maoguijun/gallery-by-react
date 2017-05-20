require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imageDatas = require('../data/imageDatas.json');
//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas  = (function genImageURL(imageDatasArr){
  for(var i =0 ,j = imageDatasArr.length;i<j;i++){
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require(`/images/${singleImageData.fileName}`)
    return imageDatasArr;
  }
})(imageDatas)

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