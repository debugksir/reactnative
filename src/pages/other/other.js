import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
	position: relative;
	width: 100%;
	height: 100%;
	padding-bottom: 72;
	background-color: ${props => props.theme.viewBg};
	justify-content: center;
`;

const Text = styled.Text`
	font-size: ${props => props.theme.text};
	color: ${props => props.theme.normalFont};
`;
const IconText = styled.Text`
	color: ${props => props.theme.normalFont};
`;

export default class Article extends Component {
	static navigationOptions = ({navigation}) => ({
      headerTitle: <Text numberOfLines={1}>o~o</Text>,
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
				<IconText>
					<Icon name='pied-piper-alt' size={136} />
					<Text>好吧,这个还没做好嘿嘿嘿...</Text>
				</IconText>
			</View>
		)
	}
}