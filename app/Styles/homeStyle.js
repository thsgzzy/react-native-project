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
    borderColor: '#f8f8f8',
  },
  headerInput: {
    flex: 1,
    height:36,
    marginTop:6,
    textAlign:'center',
    padding:0,
    backgroundColor:'#f8f8f8'
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
  item: {
    flex:1,
    marginTop:12,
    flexDirection:'column',
  },
  itemTitle: {
    flex:1,
    fontSize:24,
    lineHeight:40,
    textAlign:'center',
  },
  itemAuthor: {
    flex:1,
    fontSize:16,
    lineHeight:36,
    textAlign:'center',
  },
  itemIntro: {
    flex:1,
    fontSize:12,
    lineHeight:20,
    height:40,
    paddingLeft:12,
    paddingRight:12,
  }
})
