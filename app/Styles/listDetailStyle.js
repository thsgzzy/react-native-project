'use strict';

import React from 'react-native';
let { StyleSheet } = React;

export default StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },
  header: {
    height:48,
    flexDirection:'row',
    borderBottomWidth:1,
    borderStyle: 'solid',
    borderColor: '#f1f1f1',
    justifyContent: 'center',
  },
  headerLeft: {
    width:44,
  },
  headerRight: {
    width:44,
  },
  headerCenter: {
    flex:1,
  },
  headerText: {
    fontSize: 20,
    lineHeight:36,
    paddingLeft: 12,
    textAlign:'center',
  },
  headerIcon: {
    width:20,
    height:20,
    margin:12,
  },
  section: {
    flex:1,
    flexDirection:'column',
    paddingBottom:20,
  },
  title: {
    height:100,
    padding:15,
    flexDirection:'row',
  },
  titleLeft: {
    width:100,
  },
  titlePic: {
    width:70,
    height:70,
  },
  titleCenter: {
    flex:1,
  },
  titleText: {
    fontSize:20,
    fontWeight:'bold',
  },
  titleLineTwo:{
    marginTop:4,
    marginBottom:4,
  },
  titleInfo: {
    fontSize:14,
    color:'#666',
  },
  titleLineThree: {
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  onLineText: {
    color:'#666',
  },
  retieText: {
    color:'#666',
  },
  onLineNum: {
    color:'#FF6600',
  },
  retieNum: {
    color:'#FF6600',
  },
  titleRight: {
    width:30,
  },
  titleAdd: {
    width:30,
    height:30,
    marginTop:20,
  },
  hasMarginTop: {
    height:20,
    backgroundColor:'#f1f1f1',
  },
  infoItem: {
    flexDirection:'row',
    padding:20,
    borderBottomWidth:1,
    borderColor:'#f1f1f1',
    borderStyle:'solid',
  },
  infoItemLeft: {
    flex:1,
    paddingRight:30,
  },
  infoItemLeftOne: {
    height:30,
    flexDirection:'row'
  },
  avigator: {
    width:30,
    height:30,
    borderRadius:15,
  },
  author: {
    fontSize:16,
    paddingLeft:20,
    lineHeight:25,
  },
  infoItemLeftTwo: {
    marginTop:15
  },
  description: {
    fontSize:18,
  },
  infoItemLeftThree: {
    flexDirection:'row',
    marginTop:15,
  },
  infoIcon: {
    width:12,
    height:12,
    marginRight:2,
  },
  infoNum: {
    fontSize:14,
    lineHeight:11,
    color:'#B3B3B3',
    marginRight:14,
  },
  infoItemRight: {
    width:80,
    justifyContent:'center',
  },
  infoRightPic: {
    width:80,
    height:80,
  }
})
