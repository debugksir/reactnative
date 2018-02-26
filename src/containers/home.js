import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';
// import RecommendScreen from '../pages/home/recommend';
// import AttentionScreen from '../pages/home/attention';
// import request from '../utils/fetch';
// const data = request('/users/','POST')
import { articles } from '../data/mock';
// console.error(hello)

const View = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.mainBg};
`;

const TabView = styled.View`
	  height: 40;
    width 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.viewBg};
    border-style: solid;
    border-bottom-color: #D1D1D1;
    border-bottom-width: 2px;
`;
const TabText = styled.Text`
  width: 100;
  height: 44;
  line-height: 44;
  text-align: center;
  color: ${props => props.theme.normalFont}
  font-size: ${props => props.theme.text}
`;
const FlatList = styled.FlatList`
  
`;
const ItemView = styled.TouchableOpacity`
  margin-top: 12;
  padding: 12px;
  height; 128;
  width: 100%;
  background-color: ${props => props.theme.viewBg}
`;
const ItemTitle = styled.Text`
  font-size: ${props => props.theme.title};
  color: ${props => props.theme.normalFont};
  height: 24;
  line-height: 24;
`;
const ItemAuthor = styled.Text`
  font-size: ${props => props.theme.text };
  color: ${props => props.theme.lightFont};
  height: 20;
  line-height: 20;
`;
const ItemText = styled.Text`
  font-size: ${props => props.theme.text };
  color: ${props => props.theme.normalFont}
`;

const Text = styled.Text`
	  font-size: 18px;
    text-align: center;
    margin: 10px;
`;

export default class MainScreen extends Component<{}> {
  static navigationOptions = ({navigation,screenProps}) => ({
    tabBarLabel: '首页',
    tabBarIcon: (tintColor) => (<Icon name="home" color={tintColor.tintColor} size={20} style={{marginTop: -6}} />)
  })
  render() {
    const { navigation } = this.props;
    // console.error(Data.data);
    return (
      	<View>
          <TabView>
            <TabText>推荐</TabText>
            <TabText>关注</TabText>
          </TabView>
          <FlatList
            data={articles.data}
            renderItem={({item}) => (
              <ItemView 
                onPress={() => {
                  navigation.navigate('Article', item)
                }}
              >
                <ItemTitle numberOfLines={1}>{item.title}</ItemTitle>
                <ItemAuthor numberOfLines={1}>{item.author}</ItemAuthor>
                <ItemText numberOfLines={4}>{item.text}
                </ItemText>
                <ItemAuthor>{item.agree}赞同 - {item.collection}收藏 - {item.comment}评论 </ItemAuthor>
              </ItemView>
            )}
          />
        </View> 
    );
  }
}

