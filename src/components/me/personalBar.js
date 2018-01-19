import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	width: 100%;
	height: 120;
	background-color: ${props => props.theme.viewBg};
	border-style: solid;
	border-bottom-color: #D1D1D1;
	border-bottom-width: 1px;
`;
const Text = styled.Text`
	font-size: ${props => props.theme.text};
	line-height: 44;
	color: ${props => props.theme.normalFont};
`;
const LeftView = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 200;
	height: 100;
`;
const Avatar = styled.Image`
	width: 64;
	height: 64;
	border-radius: 32; 
`;
const NickView = styled.View`
	width: 120;
	height: 50;
	justify-content: space-around;
`;
const Nickname = styled.Text`
	color: ${props => props.theme.normalFont};
	font-size: ${props => props.theme.title};
`;
const Achieve = styled.Text`
	font-size: 12;
	width: 40;
	height 18;
	text-align: center;
	line-height: 18;
	color: #FFFFFF;
	background-color: #FFB249
	border-radius: 10;
`;

export default class Header extends Component {
	render() {
		return(
			<View>
				<LeftView>
					<Avatar source={{uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2334584121,1324775889&fm=27&gp=0.jpg'}}/>
					<NickView>
						<Nickname>白夜飞鱼</Nickname>
						<Achieve>书童</Achieve>
					</NickView>
				</LeftView>
				<Icon name='angle-right' size={16} color='#484848' />
			</View>
		)
	}
}