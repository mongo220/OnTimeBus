import React, { useState, useEffect } from 'react';
import {ImageBackground} from 'react-native';

import Loading from '../../components/Loading/index';
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
  TextButton
} from './styles';

import api from '../../services/index';

export default function Login({ navigation }) {

  const background = require('../../assets/background.jpg');



  const [loading,setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  

 async function Login (){
    console.log(email)
  const DS_EMAIL = email;
    const DS_SENHA = senha;


    const userData = { DS_EMAIL, DS_SENHA };
    console.log(userData);
    //setLoading(true);

    const response = await api.get('/user',userData);

    console.log(response);

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
                <Input value={email} onChangeText={setEmail}/>
                <Label>Senha:</Label>
                <Input value={senha} onChangeText={setSenha} />            
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
            <Loading loading={loading}/>
        </View>
      </ImageBackground>

  );
}
