import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
	margin-top: 12;
	justify-content: space-between;
	padding: 24px;
	width: 100%;
	height: 160;
	background-color: ${props => props.theme.viewBg};
`;
const RowView = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
const ColView = styled.TouchableOpacity`
	height: 48;
	justify-content: space-around;
	align-items: center;
`;

const Text = styled.Text`
	font-size: ${props => props.theme.text};
	line-height: 44;
	color: ${props => props.theme.normalFont};
`;

export default class Header extends Component {
	render() {
		const { nav } = this.props;
		return(
			<View>
				<RowView>
					<ColView onPress={ () => nav.navigate('Other')}>
						<Icon name='envelope' size={20} color='#FFB2C3' />
						<Text>信息</Text>
					</ColView>
					<ColView>
						<Icon name='credit-card-alt' size={20} color='#33FCD1' />
						<Text>钱包</Text>
					</ColView>
					<ColView>
						<Icon name='tags' size={20} color='#FFDE70' />
						<Text>收藏</Text>
					</ColView>
					<ColView>
						<Icon name='gift' size={20} color='#E48BFF' />
						<Text>礼品</Text>
					</ColView>
				</RowView>
				<RowView>
					<ColView>
						<Icon name='shopping-cart' size={20} color='#97CCFC' />
						<Text>订单</Text>
					</ColView>
					<ColView>
						<Icon name='trophy' size={20} color='#FCDE7A' />
						<Text>成就</Text>
					</ColView>
					<ColView>
						<Icon name='coffee' size={20} color='#68FEDB' />
						<Text>休闲</Text>
					</ColView>
					<ColView>
						<Icon name='gittip' size={20} color='#FF8FD5' />
						<Text>足迹</Text>
					</ColView>
				</RowView>
			</View>
		)
	}
}