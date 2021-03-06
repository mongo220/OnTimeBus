import React from 'react'
import styled from 'styled-components/native'

//#region  Views

export const View = styled.View`
    width:90%;
    margin-left:10;
    margin-right:10;
`;



export const Div = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 15%;
`;

export const DivCad = styled.View`
    margin-top: 50px;
    margin-bottom: 10px;
    margin-left: -20px;
    height: 80px;
    width: 500px;
    background-color:#6b59c2;
    border-radius: 2;
`;

export const Br = styled.View`
    padding-top:5px;
    padding-bottom: 5px;
`;

//#endregion

//#region  Text Components

export const Title = styled.Text`
    font-family: Roboto;
    color : #000;
    font-size: 36px;
    font-weight: bold;
    margin-left: 30%;
    margin-top: 40%;
    padding-bottom: 55px;
`;

export const Logo = styled.Image`
    height: 150px;
    width: 100px;
    margin-left:125px;
    margin-top:90px;
    margin-bottom: 30px;
`;

export const Label = styled.Text`
    font-family: Roboto;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;

export const Input =styled.TextInput`
    margin-top: 5px;
    margin-bottom:10px;
    padding-left: 10px;        
    width: 250px;
    height:40px;
    border-color: #fff;
    border-width: 2px;
    border-radius: 10;
    color: #fff;
`;

//#endregion

//#region  Buttons


export const Button = styled.TouchableOpacity`
    position: relative;
    width: 250px;
    height: 40px;
    background-color:#6b59c2;
	border-radius:28px;
	border:1px solid #ffffff;
    color:#ffffff;

`;

export const TextButton = styled.Text`
    color:#ffffff;
    font-family:Roboto;
    font-size:20px;
    padding-top:4px;
    margin-left:40%;
    text-decoration:none;
    text-shadow:0px 1px 0px #aad6a3;
    font-weight: bold;
`;

export const TextCenter = styled.Text`
    color:#ffffff;
    font-family:Roboto;
    font-size:20px;
    padding-top:15px;
    margin-left:29%;
    text-decoration:none;
    text-shadow:0px 1px 0px #aad6a3;
    font-weight: bold;
`;

export const TextLink = styled.Text`
    color:#ffffff;
    font-family:Roboto;
    font-size:16px;
    padding-top:20px;
    text-decoration:none;
    text-shadow:0px 1px 0px #aad6a3;
    font-weight: bold;
    margin-left: 30%;
`;

//#endregion
