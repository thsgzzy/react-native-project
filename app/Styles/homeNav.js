'use strict';

import React from 'react-native';
let { StyleSheet } = React;

export default StyleSheet.create({
  navBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  item:{
    flex:1,
    height:100,
    alignItems:'center',
    justifyContent:'center'
  },
  navImg:{
    width:50,
    height:50
  },
  navFont:{
    lineHeight:24
  }
})
