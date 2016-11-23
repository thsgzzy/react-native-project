'use strict';

import React from 'react';
import styles from '../Styles/homeStyle';
import icons from '../Assets/Icons';
import HomeSwiper from '../Components/Swiper';
import HomeNav from '../Components/HomeNav';
import HomeDetail from '../Components/HomeDetail';


import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  ListView,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

const REQUEST_URL = 'http://takozhang.cn/douguo/';
class Home extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.navigator);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      getIndex:0,
      loadedHomeList:false,
      loadedInfo:false,
      homeNav: [],
      swiperImg:[],
      homeInfo:[]
    }

    this.fetchData('http://takozhang.cn/douguo/homeList.json',this.getHomeList);
    let defaultUrl = this.getUrl(this.state.getIndex);
    this.fetchData(defaultUrl,this.getInfo);
  }

  getUrl(index) {
    if(index==0){
      return `${REQUEST_URL}home.json`;
    }else{
      return `${REQUEST_URL}getMore${index}.json`;
    }
  }

  getHomeList(obj,responseData){
    obj.setState({
      loadedHomeList:true,
      swiperImg: responseData.trs,
      homeNav: responseData.fs
    });
  }

  getInfo(obj,responseData){
    console.log(responseData);
    obj.setState({
      loadedInfo:true,
      homeInfo:responseData.result.list
    })
  }

  renderHomeInfo(rowData){
    return (
      <TouchableHighlight
        underlayColor="rgba(34, 26, 38, 0.1)"
        onPress={() => this.showHomeDetail(rowData)}
      >
        <View style={styles.item}>
          <View style={{width:Dimensions.get('window').width,height:12,backgroundColor:'#eee'}}></View>
          <Image style={{width:Dimensions.get('window').width,height:260}} source={{uri:rowData.r.p}} />
          <Text style={styles.itemTitle}>{rowData.r.n}</Text>
          <Text style={styles.itemAuthor}>{rowData.r.an}</Text>
          <Text style={styles.itemIntro}>{rowData.r.cookstory}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  showHomeDetail(rowData) {
    this.props.navigator.push({
      component: HomeDetail,
      passProps: {rowData}
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

  onEndReached(){
    console.log("已经到底了~~~~~~~~");
  }

  render() {
    const indicator=!(this.state.loadedHomeList && this.state.loadedInfo)?(
      <ActivityIndicator size="large" color="#666" />
    ):(
      <Text></Text>
    );
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.headerIcon} source={{uri: icons.homeSearchLeft}} />
          <TextInput
            style={styles.headerInput}
            underlineColorAndroid='transparent'
            placeholder="菜谱、用户、商品"
            onChangeText={(text) => this.setState({text})}
          />
          <Image style={styles.headerIcon} source={{uri: icons.homeSearchRight}} />
        </View>
        <ScrollView style={styles.section}>
          <View style={{width:Dimensions.get('window').width,height:300}}>
            <HomeSwiper imgBox={this.state.swiperImg} />
          </View>
          <View style={{width:Dimensions.get('window').width}}>
            <HomeNav navList={this.state.homeNav} />
          </View>
          <View style={{width:Dimensions.get('window').width,}}>
            <ListView
              enableEmptySections = {true}
              onEndReached={this.onEndReached}
              dataSource={this.dataSource.cloneWithRows(this.state.homeInfo)}
              renderRow={this.renderHomeInfo.bind(this)}
            />
          </View>
          <View>
            {indicator}
          </View>
        </ScrollView>
      </View>
    )
  }
};

export default Home;
