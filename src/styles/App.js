import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'fontFace': {
    'fontFamily': '"icons-turn-arrow"',
    'src': 'url("../../fonts/icons/turn-arrow.eot") format("embedded-opentype"), url("../../fonts/icons/turn-arrow.woff") format("woff"), url("../../fonts/icons/turn-arrow.ttf") format("truetype"), url("../../fonts/icons/turn-arrow.svg") format("svg")'
  },
  'html': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#222'
  },
  'body': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#222'
  },
  'content': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  // stage -- start
  'stage': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 780 }]
  },
  // stage -- end
  // image -- start
  'img-sec': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflow': 'hidden',
    'backgroundColor': '#ddd',
    'perspective': '1800px'
  },
  'img-figure': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 560 }],
    'height': [{ 'unit': 'px', 'value': 480 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }],
    'backgroundColor': '#fff',
    'boxSizing': 'border-box',
    'cursor': 'pointer',
    'transformOrigin': '0 50% 0',
    'transformStyle': 'preserve-3d',
    'transition': 'transform .6s ease-in-out, left .6s ease-in-out, top .6s ease-in-out'
  },
  'img-figureis-inverse': {
    'transform': 'translate(320px) rotateY(180deg)'
  },
  'img-figure img': {
    'width': [{ 'unit': 'px', 'value': 480 }],
    'height': [{ 'unit': 'px', 'value': 320 }]
  },
  'figcaption': {
    'textAlign': 'center'
  },
  'figcaption img-title': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#a7a0a2',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'figcaption img-back': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 40 }],
    'overflow': 'auto',
    'color': '#a7a0a2',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'textAlign': 'left',
    'backgroundColor': '#fff',
    'boxSizing': 'border-box',
    'transform': 'rotateY(180deg) translateZ(1px)',
    'backfaceVisibility': 'hidden'
  },
  'figcaption img-back p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // image -- end
  // controller -- start
  'controller-nav': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 30 }],
    'zIndex': '101',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center'
  },
  'controller-unit': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'textAlign': 'center',
    'verticalAlign': 'middle',
    'cursor': 'pointer',
    'backgroundColor': '#aaa',
    'borderRadius': '50%',
    'transform': 'scale(0.5)',
    'transition': 'transform .6s ease-in-out, background-color .3s'
  },
  'controller-unitis-center': {
    'backgroundColor': '#888',
    'transform': 'scale(1)'
  },
  'controller-unitis-center::after': {
    'color': '#fff',
    'fontFamily': '"icons-turn-arrow"',
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'content': '"\e600"',
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  'controller-unitis-centeris-inverse': {
    'backgroundColor': '#555',
    'transform': 'rotateY(180deg)'
  },
  // controller -- end
});
