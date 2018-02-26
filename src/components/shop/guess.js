import styled from 'styled-components/native';
import React, { Component } from 'react';
import { guesses } from '../../data/mock';

const View = styled.View`
	padding: 24px;
	width: 100%;
	background-color: ${props => props.theme.viewBg};
`;
const TitleView = styled.View`
	width: 100%;
	height: 16;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.Text`
	font-size: ${props => props.theme.title};
	color: ${props => props.theme.normalFont};
`;
const Change = styled.Text`
	font-size: ${props => props.theme.text};
	color: ${props => props.theme.activeFont};
`;
const ImageView = styled.FlatList`
	margin-top: 12;
	width: 100%;
`;
const Item = styled.View`
	margin-right: 16;
	width: 72;
	height: 174;
	justify-content: space-around;
	align-items center;
`;
const Image = styled.Image`
	width: 72;
	height: 128;
`;
const Text = styled.Text`
	margin-top: 6;
	margin-left: 2;
	font-size: ${props => props.theme.text};
	color: ${props => props.theme.normalFont};
`;

const LightText = styled.Text`
	margin-top: 6;
	margin-left: 2;
	font-size: ${props => props.theme.tip};
	color: ${props => props.theme.lightFont};
`;

export default class Guess extends Component {
	render() {
		return (
			<View>
				<TitleView>
					<Title>{this.props.title}</Title>
					<Change> 换一批</Change>
				</TitleView>
				<ImageView
					horizontal={true}
					data={guesses.data}
					renderItem={({item}) => (
						<Item>
							<Image source={{uri: item.image}} resizeMode='contain' />
							<Text numberOfLines={1}>{item.title}</Text>
							<LightText numberOfLines={1}>{item.author}</LightText>
							<LightText numberOfLines={1}>{item.type}</LightText>
						</Item>
					)}
				/>
			</View>
		)
	}
}