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

import styles from '../Styles/detailStyle';
import icons from '../Assets/Icons.js';

class HomeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedInfo:false,
      detailInfo: this.props.route.passProps.rowData
    };
    setTimeout(function(){
      this.setState({
        loadedInfo:true,
      });
    }.bind(this),1000);
  }

  returnHome() {
    let {navigator} = this.props;
    console.log(navigator);
    navigator.jumpBack();
  }

  render() {
    const stepList=this.state.detailInfo.r.cookstep.map((item,index)=>{
      return (
        <View style={styles.itemStepBox} key={index}>
          <View>
            <Image style={{width:Dimensions.get('window').width-40,height:240,marginRight:20,}} source={{uri:item.image}} />
          </View>
          <View style={styles.stepInfoBox}>
            <Text style={styles.stepNum}>{item.position}</Text>
            <Text style={styles.stepInfoDetail}>{item.content}</Text>
          </View>
        </View>
      )
    });
    if(!this.state.loadedInfo){
      return (
        <ActivityIndicator size="large" color="#666" style={{marginTop:100}} />
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableHighlight
              underlayColor="rgba(34, 26, 38, 0.1)"
              onPress={this.returnHome.bind(this)}>
              <Image style={styles.headerIcon} source={{uri:icons.detailBack}} />
            </TouchableHighlight>
          </View>
          <View style={styles.headerCenter} />
          <View style={styles.headerRight}>
            <Image style={styles.headerIcon} source={{uri:icons.detailQuan}} />
            <Image style={styles.headerIcon} source={{uri:icons.detailWeixin}} />
            <Image style={styles.headerIcon} source={{uri:icons.detailShare}} />
          </View>
        </View>
        <ScrollView style={styles.section}>
          <View>
            <Image style={{width:Dimensions.get('window').width,height:400}} source={{uri:this.state.detailInfo.r.p}} />
          </View>
          <View style={{paddingLeft:20,paddingRight:20}}>
            <View style={styles.titleBox}>
              <Text style={styles.title}>{this.state.detailInfo.r.n}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.info}>{this.state.detailInfo.r.cookstory}</Text>
            </View>
            <View>
              <Text style={styles.title}>— 烹饪步骤 —</Text>
              <Text style={styles.step}>{`共${this.state.detailInfo.r.cookstep.length}步，点击进入大图模式`}</Text>
            </View>
            <View style={styles.stepBox}>
              {stepList}
            </View>
            <View style={styles.comment}>
              <Text style={styles.commentItem}>· 5人成功学做了这道菜</Text>
              <Text style={styles.commentItem}>· 14条评论</Text>
              <Text style={styles.commentItem}>· 查看更多相关菜谱</Text>
              <Text style={styles.endInfo}>觉得写得好的话就真诚地赞赏吧</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
};

export default HomeDetail;
