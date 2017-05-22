require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imageDatas = require('../data/imageDatas.json');
//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas  = (function genImageURL(imageDatasArr){
  for(var i =0 ,j = imageDatasArr.length;i<j;i++){
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require(`../images/${singleImageData.fileName}`)
    return imageDatasArr;
  }
})(imageDatas)

class ImgFigure extends React.Component {
  render(){
    <figure className = "img-figure">
      <img src = {this.props.data.imageURl} alt = {this.props.data.title}/>
      <figcaption>
        <h2>{this.props.data.title}</h2>
      </figcaption>
    </figure>
  }
}
class GalleryByReactApp extends React.Component {
  render() {
    let controllerUnits = [],
      imgFigures =[];
      
      imageDatas.forEach((val)=>{
        imgFigures.push(<ImgFigure data = {val}></ImgFigure>)
      });

    return (
      <section className = "state">
        <section className = "img-sec">
          {imgFigures}
        </section>
        <nav className = "controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

module.exports = GalleryByReactApp;