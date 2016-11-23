'use strict';

import React from 'react-native';
let { StyleSheet } = React;

export default StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  header: {
    height:48,
    flexDirection:'row',
    borderBottomWidth:1,
    borderStyle: 'solid',
    borderColor: '#f1f1f1',
    backgroundColor:'#fff',
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
  hasMarginTop: {
    height:10,
    backgroundColor:'#f1f1f1',
  },
  touxiang: {
    height:100,
    flexDirection:'row',
    paddingLeft:20,
    marginTop:10,
    backgroundColor:'#fff',
  },
  touxiangLeft: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  touxiangRight: {
    width:40,
    alignItems:'center',
    justifyContent:'center',
  },
  avigator: {
    width:60,
    height:60,
    borderRadius:30,
  },
  dianji: {
    marginLeft:20,
    fontSize:14,
  },
  next: {
    width:8,
    height:16,
  },
  navBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    marginTop:10,
  },
  navItem:{
    flex:1,
    height:100,
    alignItems:'center',
    justifyContent:'center'
  },
  navImg:{
    width:30,
    height:30,
  },
  navFont:{
    lineHeight:24,
    marginTop:10,
  },
  info: {
    backgroundColor:'#fff',
    marginTop:10,
  },
  infoItem: {
    height:48,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderBottomWidth:1,
    borderStyle: 'solid',
    borderColor: '#f1f1f1',
  },
  infoLeft: {
    flex:1,
    paddingLeft:20,
  },
  infoRight: {
    width:8,
    height:16,
    marginRight:20,
  },
})
