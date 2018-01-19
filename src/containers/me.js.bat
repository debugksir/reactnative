import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';
const ShopIcon = (<Icon name="book" size={18} color="#03C3D6" />)
const View = styled.View`
	flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.main};
`;
const Text = styled.Text`
	font-size: 18px;
    text-align: center;
    margin: 10px;
`;

export default class ShopScreen extends Component<{}> {
  static navigationOptions = ({navigation,screenProps}) => ({
    tabBarLabel: '书城',
    tabBarIcon: ShopIcon
  })
  render() {
    return (
      	<View>
          <Icon name='opencart' size={88} color='black' />
      	</View>
    );
  }
}