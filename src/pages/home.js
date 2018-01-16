import React, { Component } from 'react';

import styled from "styled-components/native";

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

export default class MainScreen extends Component<{}> {
  static navigationOptions = ({navigation,screenProps}) => ({
    tabBarLabel: '推荐'
  })
  render() {
    return (
      	<View>
	        <Text>
	          hello world !
	        </Text>
      	</View>
    );
  }
}

