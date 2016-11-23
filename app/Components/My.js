'use strict';

import React from 'react';
import styles from '../Styles/myStyle';
import icons from '../Assets/Icons';


import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

class My extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      myNav:[
        {
          icon:icons.dingdan,
          title:'全部订单'
        },
        {
          icon:icons.youhui,
          title:'我的优惠券'
        },
        {
          icon:icons.qianbao,
          title:'豆包钱包'
        }
      ],
      myInfo:[
        '我的收藏',
        "最近浏览菜谱",
        "积分商城",
        "采购清单",
        "草稿箱",
        "应用推荐"
      ]
    }
  }

  render() {
    const myNav=this.state.myNav.map((item,index)=>{
      return (
        <View style={styles.navItem} key={index}>
          <Image style={styles.navImg} source={{uri:item.icon}} />
          <Text style={styles.navFont}>{item.title}</Text>
        </View>
      )
    });
    const myInfo=this.state.myInfo.map((item,index)=>{
      return (
        <View style={styles.infoItem} key={index}>
          <Text style={styles.infoLeft}>{item}</Text>
          <Image style={styles.infoRight} source={{uri:icons.next}} />
        </View>
      )
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>我的</Text>
          <Image style={styles.headerIcon} source={{uri: icons.shopSearch}} />
          <Image style={styles.headerIcon} source={{uri: icons.tool}} />
        </View>
        <ScrollView>
          <View style={styles.touxiang}>
            <View style={styles.touxiangLeft}>
              <Image style={styles.avigator} source={{uri:icons.avigator}} />
              <Text style={styles.dianji}>点击登录或注册</Text>
            </View>
            <View style={styles.touxiangRight}>
              <Image style={styles.next} source={{uri:icons.next}} />
            </View>
          </View>
          <View style={styles.navBox}>
            {myNav}
          </View>
          <View style={styles.info}>
            {myInfo}
          </View>
        </ScrollView>
      </View>
    )
  }
};

export { My as default };
