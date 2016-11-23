'use strict';

import React from 'react';
import styles from '../Styles/listNav';
import ListDetail from '../Components/ListDetail';

import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

class HomeNav extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      nav:this.props.navigator
    }
    console.log(this.state.nav);
  }

  renderListDetail(){
    this.state.nav.push({
      component: ListDetail
    })
  }

  render(){
    const navBox=this.props.navList.map((item,index)=>{
      const rightShow=(item.ri)?(
        <Image style={styles.itemRi} source={{uri:item.ri}} />
      ):(
        <Text></Text>
      );
      return (
        <TouchableHighlight
          underlayColor="rgba(34, 26, 38, 0.1)"
          onPress={this.renderListDetail.bind(this)}
          style={styles.itemBox}
          key={index}
        >
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Image style={styles.itemImg} source={{uri:item.u}} />
            </View>
            <View style={styles.itemCenter}>
              <View style={styles.infoOne}>
                <Text style={styles.title}>{item.t}</Text>
                <Text style={styles.look}>{item.cap}</Text>
              </View>
              <View style={styles.infoTwo}>
                <Text style={styles.intro}>{item.st}</Text>
              </View>
            </View>
            <View style={styles.itemRight}>
              {rightShow}
            </View>
          </View>
        </TouchableHighlight>
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
