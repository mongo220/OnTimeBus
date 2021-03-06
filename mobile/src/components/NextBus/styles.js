import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`;

export const Top = styled.View`
    border-color: #f4f4f4;
    border-width:1px;
    border-radius: 10;
    background-color:#65ED72;
    margin-bottom: 5px;
`;
export const Row = styled.View`
    flex-direction: row; 
`;

export const Line = styled.Text`
    font-family: Roboto;
    color: #F4F4F4;
    font-size: 20px;
    font-weight: bold;
    padding-top:3px;
    padding-bottom:3px;
    padding-left:3px;
`;
export const View = styled.View`
    padding-bottom:10px;
    margin-left:10px;
    margin-right:10px;
    margin-top:10px;
    margin-bottom:10px;
    border-color: #f4f4f4;
    border-width:1px;
    background-color:#f4f4f4;
    border-radius: 10;
`;

export const Title = styled.Text`
    font-family: Roboto;
    color: #48126a;
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
    margin-right: 5px;
`;

export const Data = styled.Text`
    font-family: Roboto;
    color: #2D2D2D;
    font-size: 18px;
    margin-left: 5px;
    padding-top:1px;
    padding-bottom:1px;
`;