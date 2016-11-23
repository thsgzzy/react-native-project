'use strict';

import React from 'react-native';
let { StyleSheet } = React;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    height:48,
    flexDirection:'row',
    borderBottomWidth:1,
    borderStyle: 'solid',
    borderColor: '#f1f1f1',
  },
  headerText: {
    fontSize: 20,
    lineHeight:36,
    paddingLeft: 12,
    flex:1,
  },
  headerIcon: {
    width:20,
    height:20,
    margin:12,
  },
  search: {
    height:46,
    backgroundColor:'#f1f1f1',
    paddingLeft:12,
    paddingRight:12,
  },
  input: {
    height:36,
    textAlign:'center',
    padding:0,
    backgroundColor:'#fff',
    color:'#666',
    marginTop:5,
    borderRadius:4,
  },
  navBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  navItem:{
    flex:1,
    height:100,
    alignItems:'center',
    justifyContent:'center'
  },
  navImg:{
    width:40,
    height:40,
  },
  navFont:{
    lineHeight:24
  },
  tuijian: {
    paddingLeft:20,
    paddingRight:20,
  },
  hasMarginTop: {
    height:14,
    backgroundColor:'#f1f1f1',
  },
  titleText: {
    fontSize:16,
    height:40,
    lineHeight:28,
  },
  tuijianBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:20,
  },
  tuijianItem:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  tuijianImg:{
    width:120,
    height:120,
  },
  tuijianFont:{
    lineHeight:24,
    fontSize:14,
  },
  bibai: {
    paddingLeft:20,
  },
  bibaiImg: {
    height:240,
    marginRight:20,
    marginBottom:20,
  },
  bibaiBox: {
    paddingRight:20,
  }
})
