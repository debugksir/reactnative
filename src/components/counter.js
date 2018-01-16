import React, { Component } from 'react';

import Styled from 'styled-components/native';

// import PropTypes from 'prop-types';
// propTypes = {
// 	countValue: PropTypes.number.isRequired,
// 	onIncreaseClick: PropTypes.func.isRequired,
// 	onDecreaseClick: PropTypes.func.isRequired,
// 	switchFlag: PropTypes.bool.isRequired,
// 	onSwitchTheme: PropTypes.func.isRequired
// };

const View = Styled.View`
`;
const Button = Styled.Text`
	width: 100%;
	height: 32px;
	line-height: 32px;
	text-align: center;
	background-color: ${props => props.identifition == 'increase' ? '#FC5B5E' : '#79FCE8'};
	margin-bottom: 10px;
`;
const Text = Styled.Text`
	text-align: center;
	height: 48px;
	line-height: 48px;
`;

export default class Counter extends Component {
	constructor(props) {
		super(props)
	}

	_increaseHandle() {
		// this.props.onIncreaseClick();
		console.error(this.props.actions);
	}
	render() {
		const { actions } = this.props;
		return(
			<View>
				<Text>{this.props.countValue}</Text>
				<Button
					identifition='increase'
					onPress={() => actions.increaseAction()}
				>increase</Button>
				<Button
					identifition='decrease'
					onPress={() => actions.decreaseAction()}
				>decrease</Button>
			</View>
		)
	}
}