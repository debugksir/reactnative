import React, { Component } from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Guess from '../components/shop/guess';

const View = Styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.mainBg};
`;
class ShopScreen extends Component<{}> {
  static navigationOptions = ({navigation,screenProps}) => ({
    tabBarLabel: '书城',
    tabBarIcon: (tintColor) => (<Icon name="book" color={tintColor.tintColor} size={20} style={{marginTop: -6}} />)
  });
  render() {
    return (
      <View>
        <Guess title="猜你喜欢"/>
        <Guess title="热门推荐"/>
        <Guess title="榜单"/>
        <Guess title="免费"/>
        <Guess title="买一送一"/>
      </View>
    )
  }
}

export default ShopScreen;


