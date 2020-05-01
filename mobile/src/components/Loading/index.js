import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import {  Background,View, Text } from './styles';
import LottieView  from 'lottie-react-native';

import animation from '../../assets/animations/loading.json';


export default function Loader(props) {
  const { loading,...attributes } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}>
        <Background />
          <View>
            <LottieView source={animation} autoPlay resizeMode='contain' style={StyleSheet.create({width:50, height:100})}/>     
            <Text>Carregando...</Text>
          </View>
    </Modal>
  )
}