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
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    lineHeight:36,
    paddingLeft: 12,
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
  showGrayMargin: {
    height:12,
    backgroundColor:'#f8f8f8',
  },
  hasMarginTop: {
    marginTop:20,
  },
  hotTitle: {
    lineHeight:50,
    fontSize: 24,
    paddingLeft:20,
  },
  hotItem: {
    borderBottomWidth:1,
    borderColor:'#f1f1f1',
    borderStyle:'solid',
    flexDirection:'row',
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
  },
  hotLeft: {
    flex:3,
  },
  hotRight: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  hotPic: {
    width:100,
    height:100,
    marginTop:20,
  },
  hotOne: {
    marginTop:18,
    height:36,
    flexDirection:'row',
  },
  oneLeft: {
    width:54,
  },
  avigator: {
    width:36,
    height:36,
    borderRadius:18,
  },
  name: {
    fontSize:16,
  },
  date: {
    fontSize:12,
    color:'#666',
  },
  hotTwo: {
    fontSize:20,
    lineHeight:30,
    marginTop:12,
  },
  hotThree: {
    flexDirection:'row',
    marginTop:10,
  },
  laizi: {
    fontSize:12,
    color:'#666',

  },
  from: {
    fontSize:12,
    paddingLeft:4,
    color:'#FF9933',
  }


})
