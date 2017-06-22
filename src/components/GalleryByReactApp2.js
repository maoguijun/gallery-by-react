'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

// CSS
require('normalize.css/normalize.css');
require('styles/App.scss');


// 获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');

// 利用自执行函数， 将图片名信息转成图片URL路径信息
(function genImageURL(imageDatasArr) {
	for (var i = 0, j = imageDatasArr.length; i < j; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}

    return imageDatasArr;
})(imageDatas);

class ImgFigure extends React.Compontent{
	render(){
		return <figure>
			<img src={this.props.data.imageURL} alt={this.props.data.title}/>
			<figcaption>
				<h2>{this.props.data.title}</h2>
			</figcaption>
		</figure>
	}
}
//最外层组件
class GalleryByReactApp extends React.Component{
	render(){
		var controllerUnits = [],
				imgFigures = [];

		imageDatas.forEach((value)=>{
			imgFigures.push(<ImgFigure data={value}/>);

		}, this);
		return<section className="stage">
			<section className="img-sec">
				{imgFigures}
			</section>
			<nav className="controller-nav">
				{controllerUnits}
			</nav>
		</section>
	}
}

module.exports = GalleryByReactApp;
