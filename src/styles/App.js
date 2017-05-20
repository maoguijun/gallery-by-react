import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Base Application Styles
  'html': {
    'background': '#222'
  },
  'body': {
    'background': '#222'
  },
  'content': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'stage': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 680 }]
  },
  'img-sec': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflow': 'hidden',
    'backgroundColor': '#ddd'
  },
  'controller-nav': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 30 }],
    'zIndex': '101',
    'width': [{ 'unit': 'px', 'value': 100 }],
    'textAlign': 'center'
  }
});
