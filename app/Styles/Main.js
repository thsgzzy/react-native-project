'use strict';

import React from 'react-native';
let { StyleSheet } = React;

export default StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    paddingTop:20,
    flex: 1,
  },
  tabBar: {
    height: 44,
    borderTopWidth:1,
    borderColor:'#eee',
    borderStyle:'solid',
    backgroundColor:'#fcfcfc',
  },
  tabBarBox: {
    flex: 1,
    flexDirection: 'row'
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImageLight: {
    width: 20,
    height: 20,
    tintColor: '#FF6600',
  },
  iconImageDark: {
    width: 20,
    height: 20,
    tintColor: 'rgba(150, 150, 150, 0.8)',
  },
  tabBarLight: {
    fontSize: 10,
    color: '#FF6600',
  },
  tabBarDark: {
    fontSize: 10,
    color: 'rgba(150, 150, 150, 0.8)',
  },
  tabBarThumb: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // list 顶部样式
  title: {
    backgroundColor: 'darkslateblue',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
    paddingTop: 15,
    color: 'rgba(255, 255, 255, 0.8)',
  },


});
