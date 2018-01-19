import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
	flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.mainBg};
`;
const Text = styled.Text`
	font-size: 18px;
    text-align: center;
    margin: 10px;
`;

export default class MainScreen extends Component<{}> {
  static navigationOptions = ({navigation,screenProps}) => ({
    tabBarLabel: '推荐',
    tabBarIcon: (tintColor) => (<Icon name="home" color={tintColor.tintColor} size={20} style={{marginTop: -6}} />)
  })
  render() {
    const { navigation } = this.props;
    return (
      	<View>
          <Icon name='grav' size={108} color='black' onPress={() => navigation.navigate('Setting')} />
      	</View>
    );
  }
}

