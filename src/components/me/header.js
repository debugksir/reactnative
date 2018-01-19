import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 0 16px;
	width: 100%;
	height: 44;
	background-color: ${props => props.theme.viewBg};
	border-style: solid;
	border-bottom-color: #D1D1D1;
	border-bottom-width: 2px;
`;
const Text = styled.Text`
	font-size: ${props => props.theme.title};
	line-height: 44;
	color: ${props => props.theme.normalFont};
`;

export default class Header extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			<View>
				<Text><Icon name='share-alt' size={16} /></Text>
				<Text> 我 </Text>
				<Text onPress={ () => navigate('Setting')}><Icon name='cog' size={16} /></Text>
			</View>
		)
	}
}