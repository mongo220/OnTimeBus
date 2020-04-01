import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`  
  background-color: #fff;  
  height: 95%;  
`;
export const Top = styled.View`
  flex-direction: column;
  justify-content:center;
  align-items: center;
  height: 27%;
  width: 100%;
  background-color: #48126a;
`;

export const Avatar = styled.Image`
  margin-top: 20%;
  height: 60%;
  max-width: 35%;
  border-radius: 50;
`;

export const User = styled.Text`
  margin-top: 5px;
  font-size: 17px;
  color: #fff;
  font-weight: 100;  
  margin-bottom: 30px;
`;

export const Company = styled.Text`
  font-size: 15px;
  color: #4289cb;
  font-weight: 100;  
`;

export const Icon = styled.Text`
  padding: 0 6px 0;
`;

export const Nav = styled.View`
  margin-left: 20px;
`;

export const Tab = styled.Text`
  border-color: #48126a;
  border-width: 0.5px;
  padding-left: 10px;
  padding-top:10px;
  padding-bottom:10px;
  margin-left: -20px;
  font-size: 18px;
  color: #000;
  font-weight: 100;  
`;

export const SocialMedia = styled.View`
  position: absolute;
  margin-top: 460px;
  width: 250px;
  height: 60px
  flex-direction: row;
  justify-content: space-between;    
  flex: 0;
`;