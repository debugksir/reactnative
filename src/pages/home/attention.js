import React, { Component } from 'react';
import styled from 'styled-components/native';

const View = styled.View``;
const Text = styled.Text``;

export default class Attention extends Component {
	static navigationOptions = {
		tabBarLabel: '关注'
	}
	render() {
		return(
			<View>
				<Text> Attention </Text>
			</View>
		)
	}
}