import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
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
	color: ${props => props.theme.normalFont};
`;
const IconText = styled.Text`
	width: 32;
	height: 32;
	line-height: 32;
	text-align: center;
	font-size: ${props => props.theme.title};
	color: ${props => props.theme.normalFont};
`;

export default class Header extends Component {
	render() {
		const { nav, dialogFunc } = this.props;
		return(
			<View>
				<IconText onPress={dialogFunc}><Icon name='share-alt' size={16} /></IconText>
				<Text> 我 </Text>
				<IconText onPress={ () => nav.navigate('Setting')}><Icon name='cog' size={16} /></IconText>
			</View>
		)
	}
}