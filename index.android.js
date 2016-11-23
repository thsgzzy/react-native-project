'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  Navigator,
  TouchableHighlight,
} from 'react-native';

import Home from './app/Components/Home';
import List from './app/Components/List';
import ShopGood from './app/Components/ShopGood';
import My from './app/Components/My';
import styles from './app/Styles/Main';
import icons from './app/Assets/Icons';

export default class MovieTalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    }
  }

  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(route, navigator) {
    return <route.component navigator={navigator} route={route} />
  }

  render() {

    const tabBars = [
      {title: '首页', imgSrcLight: icons.homeActive, imgSrcDark: icons.home},
      {title: '圈圈', imgSrcLight: icons.listActive, imgSrcDark: icons.list},
      {title: '购好货', imgSrcLight: icons.shopActive, imgSrcDark: icons.shop},
      {title: '我的', imgSrcLight: icons.myActive, imgSrcDark: icons.my}
    ];

    const tabBarList = tabBars.map((item, index) => {
      return (
        <View key={index} style={styles.tabBarItem}>
          <TouchableHighlight
            onPress={()=>{
              this.refs.nav.replace(routes[index]);
            }}
            underlayColor = "rgba(255,255,255,0)"
          >
            <View style={styles.tabBarThumb}>
              <Image source={{uri: item.imgSrcLight}} style={this.state.tabIndex == index ? styles.iconImageLight : styles.iconImageDark} />
              <Text style={this.state.tabIndex == index ? styles.tabBarLight : styles.tabBarDark}>{item.title}</Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    });

    const routes = [
      {name: 'Home', type: 'Type1', component: Home},
      {name: 'List', type: 'Type2', component: List},
      {name: 'Home', type: 'Type3', component: ShopGood},
      {name: 'List', type: 'Type4', component: My}
    ];

    return (
      <Navigator
        initialRoute={routes[0]}
        configureScene={this.configureScene}
        renderScene={(route, navigator) => this.renderScene(route, navigator)}
        onWillFocus={(nextRoute) => {
          if( nextRoute != routes[this.state.tabIndex]) {
            let index = routes.indexOf(nextRoute);
            if(index !== -1){
              this.setState({
                tabIndex: routes.indexOf(nextRoute)
              })
            }
          }
        }}
        ref="nav"
        navigationBar={
          <View style={styles.tabBar}>
            <View style={styles.tabBarBox}>
              {tabBarList}
            </View>
          </View>
        }
      />
    );
  }
};

AppRegistry.registerComponent('TextProject', () => MovieTalk);
