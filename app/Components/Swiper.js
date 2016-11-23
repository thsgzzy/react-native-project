'use strict';

import React from 'react';
import icons from '../Assets/Icons.js';
import Swiper from 'react-native-swiper';
import styles from '../Styles/SwiperStyle';

import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

class HomeSwiper extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const imgList=this.props.imgBox.map((item,index)=>{
      return (
        <View style={styles.slide1} key={index}>
          <Image style={{width:Dimensions.get('window').width,height:300}} source={{uri:item.b.i}} />
        </View>
      )
    });
    if(imgList.length>0){
      return (
        <Swiper style={{width:Dimensions.get('window').width}} height={300} horizontal={true} loop={true} autoplay={true}>
          {imgList}
        </Swiper>
      )
    }
    return (
      <View></View>
    )

  }
};

export default HomeSwiper;
