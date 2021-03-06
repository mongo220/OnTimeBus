import React, {useEffect, useState} from 'react';
import { Container, 
  Top, 
  Avatar,
  User, 
  Nav,
  TabButton,
  Tab,
  SocialMedia
} from './styles';
import { Icon } from 'react-native-elements'


export default function CustomDrawerContentComponent({navigation}) {  
  
  function LogOut() {
    navigation.navigate('Login');
  }
  
  return(      
        <Container>
          <Top>
            <Avatar source={require('../../assets/user.jpg')}/>
            <User>Olá, Lucas</User>
          </Top>          
          <Nav>
            <Tab>Minha Conta</Tab>
            <Tab>Linhas Favoritas</Tab>
            <Tab>Histórico</Tab>

            <Tab>Solicitar assistência</Tab>
            <TabButton onPress={LogOut}>
              <Tab>Sair</Tab>
            </TabButton>            
            <SocialMedia>
              <Icon  
                name='facebook-square'
                type='font-awesome'
                color='#48126a'
                size={32}>
              </Icon>
              <Icon  
                name='instagram'
                type='font-awesome'
                color='#48126a'
                size={32}>
              </Icon>
              <Icon  
                name='linkedin'
                type='font-awesome'
                color='#48126a'
                size={32}>
              </Icon>
              <Icon  
                name='twitter-square'
                type='font-awesome'
                color='#48126a'
                size={32}>
              </Icon>
            </SocialMedia>
          </Nav>
        </Container>
  )
}