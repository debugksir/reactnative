import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
	position: relative;
	width: 100%;
	height: 100%;
	padding-bottom: 72;
	background-color: ${props => props.theme.mainBg};
`;
const Title = styled.Text`
	padding: 12px;
	background-color: ${props => props.theme.viewBg};
	font-size: ${props => props.theme.title};
	color: ${props => props.theme.normalFont};
	border-style: solid;
	border-bottom-color: #D1D1D1;
	border-bottom-width: 2px;
`;
const Author = styled.Text`
	margin-top: 12;
	padding: 12px;
	background-color: ${props => props.theme.viewBg};
	font-size: ${props => props.theme.text};
	color: ${props => props.theme.lightFont};
	border-style: solid;
	border-bottom-color: #D1D1D1;
	border-bottom-width: 1px;
`;
const Words = styled.Text`
	padding-top: 20;
	padding-bottom: 20;
	padding-left: 12;
	padding-right: 12;
	line-height: 24;
	background-color: ${props => props.theme.viewBg};
	font-size: ${props => props.theme.text};
	color: ${props => props.theme.normalFont};
`;
const Tools = styled.View`
	padding-left: 12;
	padding-right: 12;
	position: absolute;
	bottom: 0;
	background-color: ${props => props.theme.viewBg};
	width: 100%;
	height: 48;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;
const Text = styled.Text`
	font-size: ${props => props.theme.text};
	color: ${props => props.theme.normalFont};
`;
const IconText = styled.Text`
	height: 48;
	line-height: 48;
	font-size: ${props => props.theme.strong};
	color: ${props => props.theme.normalFont};
`;

export default class Article extends Component {
	static navigationOptions = ({navigation}) => ({
      headerTitle: <Text numberOfLines={1}>{navigation.state.params.title}</Text>,
      headerLeft: <Text style={{marginLeft: 16,width: 32,height: 32, lineHeight: 32}} onPress={()=> navigation.goBack()}><Icon name='reply' size={16} /></Text>,
      headerStyle: {
      	height: 44,
      	backgroundColor: '#CCCCCC',
      	borderStyle: 'solid',
		borderBottomColor: '#D1D1D1',
		borderBottomWidth: 2
      }
    })
	render() {
		const data = this.props.navigation.state.params;
		return (
			<View>
				<Title>{data.title}</Title>
				<Author>{data.author}</Author>
				<Words>{data.text}</Words>
				<Tools>
					<IconText><Icon name="thumbs-o-up" /><Text>  {data.agree}</Text></IconText>
					<IconText><Icon name="heart-o" /><Text>  {data.comment}</Text></IconText>
					<IconText><Icon name="star-o" /><Text>  {data.collection}</Text></IconText>
				</Tools>
			</View>
		)
	}
}