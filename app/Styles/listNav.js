'use strict';

import React from 'react-native';
let { StyleSheet } = React;

export default StyleSheet.create({
  navBox:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  itemBox: {
    flex:1,
    flexDirection:'row',
  },
  item:{
    flex:1,
    height:72,
    flexDirection:'row',
    borderBottomWidth:1,
    borderStyle:'solid',
    borderColor:'#eee',
    paddingLeft:20,
    paddingRight:20,
  },
  itemLeft: {
    width:54,
  },
  itemImg: {
    width:48,
    height:48,
    marginTop:16,
  },
  itemCenter: {
    flex:1,
  },
  infoOne:{
    flexDirection:'row',
    marginTop:14,
  },
  title: {
    fontSize:16,
    fontWeight:'bold',
    paddingRight:20,
  },
  look: {
    fontSize:12,
    color:'#FF9933',
    lineHeight:20,
  },
  infoTwo: {
    marginTop:11,
  },
  intro: {
    fontSize:14,
    color:'#999',
  },
  itemRi:{
    width:36,
    height:36,
    marginTop:18,
  }

})
