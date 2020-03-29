import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import {Text} from 'react-native';

import {
  SafeAreaView,
  View

} from './styles';

function Header({ navigation }) {
   
  useEffect(() => {

  }, []);

  return (
    <SafeAreaView>
      <View>
        
        <Text>Header2</Text>   
      </View>
    </SafeAreaView>
  )
}


export default withNavigation(Header);