import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Switch = Styled.Switch`
	width: 50px;
`;
const Text = Styled.Text`
	color: #000000;
`;
const View = Styled.View`
	align-items: center;	
`;
const IconView = Styled.View`
	margin-top: 50px;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
`;

export default class SwitchTheme extends Component {
	render() {
		const { switchFlag, actions } = this.props;
		return (
			<View>
				<Switch 
					onTintColor='#2DFC63'
					TintColor='#9D9B9B'
					value={switchFlag}
					onValueChange={() => actions.switchThemeAction(switchFlag)}
				/>
				<Text>{switchFlag ? 'true' : 'false'}</Text>
				<IconView>
					<Icon name='github' size={32} color='#F83C71' />
					<Icon name='weibo' size={32} color='#33E3F9' />
					<Icon name='qq' size={32} color='#DFFE31' />
					<Icon name='weixin' size={32} color='#F97D21' />
				</IconView>
			</View>
		)
	}
}
SwitchTheme.propTypes = {
	switchFlag: PropTypes.bool.isRequired,
	actions: PropTypes.shape({
		switchThemeAction: PropTypes.func.isRequired
	})
}