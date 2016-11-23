'use strict';

import React from 'react';
import styles from '../Styles/listStyle';
import icons from '../Assets/Icons';
import ListSwiper from '../Components/ListSwiper';
import ListNav from '../Components/ListNav';

import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedInfo:false,
      nav:this.props.navigator,
      swiperImg: [],
      listNav:[],
      hotList:[],
      title:''
    }
    this.fetchData('http://takozhang.cn/douguo/list.json',this.showListInfo);
  }

  showListInfo(obj,responseData) {
    obj.setState({
      loadedInfo:true,
      swiperImg:responseData.result.bs,
      listNav:responseData.result.gs,
      hotList:responseData.result.list,
      title:responseData.result.pt
    })
  }

  fetchData(url,callback) {
    fetch(url)
      .then(response => response.json())
      .then((responseData)=>{
        console.log(responseData);
        callback(this,responseData);
      })
      .done();
  }

  render() {
    const indicator=(!this.state.loadedInfo)?(
      <ActivityIndicator size="large" color="#666" />
    ):(
      <Text></Text>
    );
    const hotItems=this.state.hotList.map((item, index) =>{
      return (
        <View style={styles.hotItem} key={index}>
          <View style={styles.hotLeft}>
            <View style={styles.hotOne}>
              <View style={styles.oneLeft}>
                <Image style={styles.avigator} source={{uri:item.gp.a.p}} />
              </View>
              <View style={styles.oneRight}>
                <Text style={styles.name}>{item.gp.a.n}</Text>
                <Text style={styles.date}>{item.gp.lt.split(' ')[0]}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.hotTwo}>{item.gp.n}</Text>
            </View>
            <View style={styles.hotThree}>
              <Text style={styles.laizi}>来自</Text>
              <Text style={styles.from}>{item.gp.gn}</Text>
            </View>
          </View>
          <View style={styles.hotRight}>
            <Image style={styles.hotPic} source={{uri:item.gp.i}} />
          </View>
        </View>
      )
    })

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>圈圈</Text>
          <Image style={styles.headerIcon} source={{uri: icons.homeSearchRight}} />
        </View>
        <ScrollView style={styles.section}>
          <View style={{width:Dimensions.get('window').width}}>
            <ListSwiper imgBox={this.state.swiperImg} />
          </View>
          <View>
            <ListNav navigator={this.state.nav} navList={this.state.listNav} />
          </View>
          <View style={styles.showGrayMargin}>
            <Text>{""}</Text>
          </View>
          <View>
            <Text style={styles.hotTitle}>{this.state.title}</Text>
          </View>
          <View style={styles.hasMarginTop}>
            {hotItems}
          </View>
          <View>
            {indicator}
          </View>
        </ScrollView>
      </View>
    )
  }
};

export { List as default };
