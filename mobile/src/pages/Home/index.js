import React, { useState, useEffect } from 'react';
import {Text,View} from 'react-native';
import { Icon } from 'react-native-elements'


import Header from '../../components/Header';
import NextBus from '../../components/NextBus';

import {
  Mapa,
  Map,
  Lines,
  FindBar,
  TextInput,
  Find
} from './styles';


export default function Home({ navigation }) {
  console.log(navigation);
  useEffect(() => {
  }, []);


  return (
    <View>
      <Header navigation={navigation}/>
      <FindBar>
        <Icon  
            name='search'
            type='font-awesome'
            color='#48126a'
            size={20}>
        </Icon>
       <TextInput placeholder={'Vamos para onde ?'}/>
      </FindBar>
     <Mapa>
       <Map source={require('../../assets/maps.png')}/>
       <Find>
       <Icon  
            name='crosshairs'
            type='font-awesome'
            color='#FFF'
            size={33}>
        </Icon>
       
       </Find>
     </Mapa>
    <Lines>
    <NextBus/>
    </Lines>
    </View>
  );
}
