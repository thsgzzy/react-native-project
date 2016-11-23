'use strict';

import React from 'react';
import styles from '../Styles/shopStyle';
import icons from '../Assets/Icons';
import ListSwiper from '../Components/ListSwiper';


import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

class ShopGood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedInfo:false,
      nav:this.props.navigator,
      swiperImg: [],
      shopNav:[],
      tuijian:[],
      bibai:[]
    }
    this.fetchData('http://takozhang.cn/douguo/buyGoods.json',this.showShopInfo);
  }

  showShopInfo(obj,responseData) {
    obj.setState({
      loadedInfo:true,
      swiperImg:responseData.result.as,
      shopNav:responseData.result.cs,
      tuijian:responseData.result.rcm.rs,
      bibai:responseData.result.bb,
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
    const navBox1=this.state.shopNav.map((item,index)=>{
      if(index<=3){
        return (
          <View style={styles.navItem} key={index}>
            <Image style={styles.navImg} source={{uri:item.i}} />
            <Text style={styles.navFont}>{item.n}</Text>
          </View>
        )
      }
    });
    const navBox2=this.state.shopNav.map((item,index)=>{
      if(index>=4){
        return (
          <View style={styles.navItem} key={index}>
            <Image style={styles.navImg} source={{uri:item.i}} />
            <Text style={styles.navFont}>{item.n}</Text>
          </View>
        )
      }
    });
    const tuijianBox=this.state.tuijian.map((item,index)=>{
      return (
        <View style={styles.tuijianItem} key={index}>
          <Image style={styles.tuijianImg} source={{uri:item.i}} />
          <Text style={styles.tuijianFont}>{item.n}</Text>
        </View>
      )
    });
    const bibaiBox=this.state.bibai.map((item,index)=>{
      return (
        <View key={index}>
          <Image style={{width:Dimensions.get('window').width-40},styles.bibaiImg} source={{uri:item.i}} />
        </View>
      )
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>购好货</Text>
          <Image style={styles.headerIcon} source={{uri: icons.shopSearch}} />
          <Image style={styles.headerIcon} source={{uri: icons.shopCar}} />
        </View>
        <ScrollView>
          <View style={styles.search}>
            <TextInput style={styles.input} value='搜索商品' underlineColorAndroid='transparent' />
          </View>
          <View style={{width:Dimensions.get('window').width}}>
            <ListSwiper imgBox={this.state.swiperImg} />
          </View>
          <View style={styles.navBox}>
            {navBox1}
          </View>
          <View style={styles.navBox}>
            {navBox2}
          </View>
          <View style={styles.hasMarginTop}></View>
          <View style={styles.tuijian}>
            <View>
              <Text style={styles.titleText}>为你推荐</Text>
            </View>
            <View style={styles.tuijianBox}>
              {tuijianBox}
            </View>
          </View>
          <View style={styles.hasMarginTop}></View>
          <View style={styles.bibai}>
            <View>
              <Text style={styles.titleText}>必败专场</Text>
            </View>
            <View>
              {bibaiBox}
            </View>
          </View>
          <View>
            {indicator}
          </View>
        </ScrollView>
      </View>
    )
  }
};

export { ShopGood as default };
