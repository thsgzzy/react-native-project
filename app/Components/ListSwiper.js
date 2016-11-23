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

class ListSwiper extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const imgList=this.props.imgBox.map((item,index)=>{
      return (
        <View style={styles.slide1,{height:240,}} key={index}>
          <Image style={{width:Dimensions.get('window').width,height:240}} source={{uri:item.i}} />
        </View>
      )
    });
    if(imgList.length>0){
      return (
        <Swiper style={{width:Dimensions.get('window').width}} height={240} horizontal={true} loop={true} autoplay={true}>
          {imgList}
        </Swiper>
      )
    }
    return (
      <View></View>
    )

  }
};

export default ListSwiper;
