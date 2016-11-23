'use strict';

import React from 'react';
import styles from '../Styles/homeNav';

import {
  Text,
  View,
  Image
} from 'react-native';

class HomeNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const navBox=this.props.navList.map((item,index)=>{
      return (
        <View style={styles.item} key={index}>
          <Image style={styles.navImg} source={{uri:item.i}} />
          <Text style={styles.navFont}>{item.t}</Text>
        </View>
      )
    });
    if(navBox.length>0){
      return (
        <View style={styles.navBox}>
          {navBox}
        </View>
      )
    }
    return (
      <View></View>
    )

  }
};

export { HomeNav as default };
