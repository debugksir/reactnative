import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 0 10px;
	width: 100%;
	height: 44;
	background-color: #FBFBFB;
	border-style: solid;
	border-bottom-color: #D1D1D1;
	border-bottom-width: 2px;
`;
const Text = styled.Text`
	font-size: 14;
	line-height: 44;
	color: #484848;
`;

export default class setItems extends Component {
	render() {
		return(
			<View>
				<Icon name='commenting' size={16} color='#484848' style={{marginTop: 14}} />
				<Text> 我 </Text>
				<Icon name='cog' size={16} color='#484848' style={{marginTop: 14}} />
			</View>
		)
	}
}