import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 32px;
	width: 100%;
	height: 56;
	background-color: ${props => props.theme.viewBg};
`;
const ItemView = styled.View`
	justify-content: space-around;
	align-items: center;
	width: 56;
	height: 40;
`;
const DevideLine = styled.View`
	width: 1;
	height: 16;
	background-color: #CECECE;
`;
const NumberText = styled.Text`
	font-size: ${props => props.theme.title};
	color: ${props => props.theme.normalFont};
`;
const TitleText =styled.Text`
	font-size: ${props => props.theme.text};
	color: ${props => props.theme.lightFont};
`;


export default class Header extends Component {
	render() {
		return(
			<View>
				<ItemView>
					<NumberText>0</NumberText>
					<TitleText>笔记</TitleText>
				</ItemView>
				<DevideLine />
				<ItemView>
					<NumberText>0</NumberText>
					<TitleText>发表</TitleText>
				</ItemView>
				<DevideLine />
				<ItemView>
					<NumberText>0</NumberText>
					<TitleText>计划</TitleText>
				</ItemView>
			</View>
		)
	}
}