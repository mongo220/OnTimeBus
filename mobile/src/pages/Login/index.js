import React, { useState, useEffect } from 'react';

import {ImageBackground} from 'react-native';


import {
  View,
  Logo,
  Div,
  Row,
  Br,
  Label,
  Input,
  Button,
  Link,
  TextLink,
  TextButton,
  Line
} from './styles';


export default function Login({ navigation }) {

  const background = require('../../assets/background.jpg');

  function Login (){
    navigation.navigate('Home');
  }
  useEffect(() => {
  }, []);


  return (
      <ImageBackground source={background}  style={{width: '100%', height: '100%'}} >  
        <View>
            <Logo source={require('../../assets/icon.png')}/>
            <Br/>
            <Div>
                <Br/>
                <Label>E-mail:</Label>
                <Input/>
                <Label>Senha:</Label>
                <Input/>            
                <Br/>
                <Button onPress={Login}>
                  <TextButton>Login</TextButton>
                </Button>
                <Br/>
            </Div>
            <Br/>
             <Row>
              <Link>
                  <TextLink>Esqueceu sua senha ?</TextLink>
                </Link>
                <Link>
                  <TextLink>Criar conta</TextLink>
                </Link>
            </Row>
        </View>
      </ImageBackground>

  );
}
