import React, { Component } from 'react';
import Styled from 'styled-components/native';
import PropTypes from 'prop-types';

const View = Styled.View`
`;
const Button = Styled.Text`
	width: 100%;
	height: 32px;
	line-height: 32px;
	text-align: center;
	background-color: ${props => props.identifition == 'increase' ? '#FC5B5E' : '#90FF90'};
	color: #107E7D;
	margin-bottom: 10px;
`;
const Text = Styled.Text`
	text-align: center;
	height: 48px;
	line-height: 48px;
`;

export default class Counter extends Component {
	render() {
		const { countValue, actions } = this.props;
		return(
			<View>
				<Text>{countValue}</Text>
				<Button
					identifition='increase'
					onPress={actions.increaseAction}
				>increase</Button>
				<Button
					identifition='decrease'
					onPress={actions.decreaseAction}
				>decrease</Button>
			</View>
		)
	}
}
Counter.propTypes = {
	countValue: PropTypes.number.isRequired,
	actions: PropTypes.shape({
		increaseAction: PropTypes.func.isRequired,
		decreaseAction: PropTypes.func.isRequired
	}).isRequired
};