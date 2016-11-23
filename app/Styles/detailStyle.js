'use strict';

import React from 'react-native';
let { StyleSheet } = React;

export default StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },
  header: {
    height:44,
    flexDirection:'row',
  },
  headerLeft: {
    flex:1,
    alignItems:'center',
    justifyContent:'space-around',
  },
  headerCenter: {
    flex:3,
  },
  headerRight: {
    flex:3,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
  },
  headerIcon: {
    width:20,
    height:20,
  },
  section: {
    flex: 1,
    flexDirection:'column',
  },
  title: {
    fontWeight:'bold',
    lineHeight:60,
    fontSize:24,
    textAlign:'center',
  },
  infoBox: {
    marginTop:10,
  },
  info: {
    fontSize:16,
    lineHeight:24,
  },
  step: {
    fontSize:16,
    marginTop:10,
    lineHeight:24,
    color:'#555',
    textAlign:'center',
  },
  itemStepBox: {
    marginTop:30,
    paddingRight:20,
  },
  stepInfoBox: {
    flexDirection:'row',
    marginTop:10,
  },
  stepNum: {
    fontSize:16,
    paddingRight:10,
    fontWeight:'bold',
    lineHeight:24,
  },
  stepInfoDetail: {
    fontSize:16,
    lineHeight:24,
  },
  comment: {
    marginTop:30
  },
  commentItem: {
    lineHeight:40,
    fontSize:14,
    color:'#FF6600',
  },
  endInfo:{
    fontSize:24,
    lineHeight:60,
    textAlign:'center',
    paddingBottom:20,
  }
})
