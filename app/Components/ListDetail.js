'use strict';

import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import styles from '../Styles/listDetailStyle';
import icons from '../Assets/Icons.js';

class ListDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      detailList:[],
      loadedInfo:false
    };
    this.fetchData('http://takozhang.cn/douguo/listDetail1.json',this.getListDetail);
  }

  returnList() {
    let {navigator} = this.props;
    console.log(navigator);
    navigator.jumpBack();
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

  getListDetail(obj,responseData){
    obj.setState({
      detailList:responseData.result.list,
      loadedInfo:true
    })
  }

  render() {
    const indicator=(!this.state.loadedInfo)?(
      <ActivityIndicator size="large" color="#666" style={{marginTop:50}} />
    ):(
      <Text></Text>
    );
    const detailInfo=this.state.detailList.map((item, index)=>{
      return (
        <View style={styles.infoItem} key={index}>
          <View style={styles.infoItemLeft}>
            <View style={styles.infoItemLeftOne}>
              <Image style={styles.avigator} source={{uri:item.d.author.user_photo}} />
              <Text style={styles.author}>{item.d.author.nick}</Text>
            </View>
            <View style={styles.infoItemLeftTwo}>
              <Text style={styles.description}>{item.d.description}</Text>
            </View>
            <View style={styles.infoItemLeftThree}>
              <Image style={styles.infoIcon} source={{uri:icons.listDetailLike}} />
              <Text style={styles.infoNum}>{item.d.likes_count}</Text>
              <Image style={styles.infoIcon} source={{uri:icons.listDetailComment}} />
              <Text style={styles.infoNum}>{item.d.comments_count}</Text>
            </View>
          </View>
          <View style={styles.infoItemRight}>
            <Image style={styles.infoRightPic} source={{uri:item.d.image}} />
          </View>
        </View>
      )
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableHighlight
              underlayColor="rgba(34, 26, 38, 0.1)"
              onPress={this.returnList.bind(this)}>
              <Image style={styles.headerIcon} source={{uri:icons.detailBack}} />
            </TouchableHighlight>
          </View>
          <View style={styles.headerCenter}>
            <Text style={styles.headerText}>全部</Text>
          </View>
          <View style={styles.headerRight}>
            <Image style={styles.headerIcon} source={{uri:icons.homeSearchRight}} />
          </View>
        </View>
        <ScrollView style={styles.section}>
          <View style={styles.title}>
            <View style={styles.titleLeft}>
              <Image style={styles.titlePic} source={{uri:'http://i1.douguo.net/upload/dish/6/a/9/750_6a8ee62b46e8d2b71a8fddf881c5ed99.jpg'}} />
            </View>
            <View style={styles.titleCenter}>
              <View style={styles.titleLineOne}>
                <Text style={styles.titleText}>秀美食</Text>
              </View>
              <View style={styles.titleLineTwo}>
                <Text style={styles.titleInfo}>叮一声清脆，秀出你的美食</Text>
              </View>
              <View style={styles.titleLineThree}>
                <Text style={styles.onLineText}>在线</Text>
                <Text style={styles.onLineNum}>2638</Text>
                <Text style={styles.retieText}>热帖</Text>
                <Text style={styles.retieNum}>197</Text>
              </View>
            </View>
            <View style={styles.titleRight}>
              <Image style={styles.titleAdd} source={{uri:icons.listDetailAdd}} />
            </View>
          </View>
          <View style={styles.hasMarginTop}></View>
          <View>
            {detailInfo}
          </View>
          <View>
            {indicator}
          </View>
        </ScrollView>
      </View>
    )
  }
};

export default ListDetail;
