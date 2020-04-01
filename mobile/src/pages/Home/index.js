import React, { useState, useEffect } from 'react';

import {Text,View} from 'react-native';
import Header from '../../components/Header';

import {
  Mapa,
  Lines
} from './styles';


export default function Home({ navigation }) {
  console.log(navigation);
  useEffect(() => {
  }, []);


  return (
    <View>
      <Header navigation={navigation}/>
     <Mapa>
       <Text>Mapa com pontos proximos</Text>
     </Mapa>
    <Lines>
      <Text>Linhas proxímas</Text>
    </Lines>
    </View>
  );
}
