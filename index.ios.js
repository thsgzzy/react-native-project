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

import styles from './app/Styles/MainADR';
import icons from './app/Assets/Icons';
import MovieList from './app/ComponentsIOS/MovieList';
import ComingSoonList from './app/ComponentsIOS/ComingSoonList';

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
      {title: '推荐电影', imgSrcLight: icons.starActive, imgSrcDark: icons.star},
      {title: '即将上映', imgSrcLight: icons.calendarActive, imgSrcDark: icons.calendar}
    ];

    const tabBarList = tabBars.map((item, index) => {
      return (
        <View key={index} style={styles.tabBarItem}>
          <TouchableHighlight
            onPress={()=>{
              // console.log(routes[index]);
              this.refs.nav.resetTo(routes[index]);
            }}
            underlayColor = "darkslateblue"
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
      {name: 'Featured', component: MovieList},
      {name: 'ComingSoon', component: ComingSoonList},
    ];

    return (
      <Navigator
        initialRoute={routes[0]}
        configureScene={this.configureScene}
        renderScene={(route, navigator) => this.renderScene(route, navigator)}
        onWillFocus={(nextRoute) => {
          if( nextRoute != routes[this.state.tabIndex]) {
            let index = routes.indexOf(nextRoute);
            if (index != -1) {
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

AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
