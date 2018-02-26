import React, { Component } from 'react';
import styled from 'styled-components/native';

const View = styled.View``;
const Text = styled.Text``;

export default class Recommend extends Component {
	static navigationOptions = {
		tabBarLabel: '推荐'
	}
	render() {
		return(
			<View>
				<Text> Recommend </Text>
			</View>
		)
	}
}