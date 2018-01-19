import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
	margin-top: 12;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	width: 100%;
	height: 112;
	background-color: ${props => props.theme.viewBg};;
`;
const LeftView = styled.View`
	justify-content: center;
	align-items: center;
	background-color: #FDD5CB;
	width: 80;
	height: 80;
	border-radius: 40;
`;
const RightView = styled.View`
	justify-content: space-around;
	align-items: center;
	width: 100;
	height: 50;
`;
const SubLeft = styled.Text`
	width: 64;
	height: 64;
	text-align: center;
	line-height: 64;
	border-radius: 32;
	color: #FFFFFF;
	background-color: #f56d5a;
`;
const WeekRead = styled.Text`
	font-size: ${props => props.theme.title};;
	color: ${props => props.theme.grayFont};;
`;

const ReadTime = styled.Text`
	color: ${props => props.theme.normalFont};
	font-size: ${props => props.theme.title};;
`;

const OverFriend = styled.Text`
	font-size: ${props => props.theme.text};;
	color: ${props => props.theme.lightFont};;	
`;

export default class Header extends Component {
	render() {
		return(
			<View>
				<LeftView><SubLeft>签到</SubLeft></LeftView>
				<WeekRead>本周阅读:</WeekRead>
				<RightView>
					<ReadTime>0分钟</ReadTime>
					<OverFriend>超过%0的书友</OverFriend>
				</RightView>
			</View>
		)
	}
}