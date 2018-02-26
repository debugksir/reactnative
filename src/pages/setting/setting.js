import React, { Component } from 'react';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/actions'

import PopupDialog, { SlideAnimation, DialogTitle, DialogButton } from 'react-native-popup-dialog';
const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});


const View = styled.View`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.mainBg};
	border-style: solid;
	border-bottom-color: #D1D1D1;
	border-bottom-width: 2px;
`;
const Text = styled.Text`
	font-size: ${props => props.theme.text};
	color: ${props => props.theme.normalFont};
`;
const ItemGroup = styled.View`
	width: 100%;
	background-color: ${props => props.theme.viewBg};
	margin-top: 12px;
`;

const Item = styled.View`
	padding: 0 12px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 40;
	border-style: solid;
	border-bottom-color: #D1D1D1;
	border-bottom-width: 1px;
`;

const Button = styled.Text`
	margin-top: 12px;
	height: 40;
	line-height: 40;
	text-align: center;
	font-size: ${props => props.theme.text};
	color: ${props => props.theme.normalFont};
	background-color: ${props => props.theme.viewBg};
	border-radius: 4;
`;

const LeftText = styled.Text`
	font-size: ${props => props.theme.text};
	color: ${props => props.theme.normalFont};
`;

const RightText = styled.Text`
	padding: 10px;
	font-size: ${props => props.theme.tip};
	color: ${props => props.theme.grayFont};
`;

const ThemeSwitch = styled.Switch`
	width: 48;
	height: 32;
`;

const Arrow = <RightText><Icon name='angle-right' size={16} /> </RightText>

class Setting extends Component {
	static navigationOptions = ({navigation}) => ({
      headerTitle: <Text>设置</Text>,
      headerLeft: <Text style={{marginLeft: 16,width: 32,height: 32, lineHeight: 32}} onPress={()=> navigation.goBack()}><Icon name='reply' size={16} /></Text>,
      headerStyle: {
      	height: 44,
      	backgroundColor: '#CCCCCC',
      	borderStyle: 'solid',
		borderBottomColor: '#D1D1D1',
		borderBottomWidth: 2
      }
    })
	render() {
		const { navigate } = this.props.navigation;
		const { fontSize, switchFlag, actions } = this.props;
		return(
			<View>
				<PopupDialog
					ref={(popupDialog) => { this.popupDialog = popupDialog }}
					dialogAnimation={slideAnimation}
					dialogTitle={<DialogTitle title="字体设置" />}
					actions={[
						<DialogButton textStyle={{fontSize: 12}} text="大" onPress={() => {actions.switchFontAction('large');this.popupDialog.dismiss()}} key="button1" />,
						<DialogButton textStyle={{fontSize: 12}} text="中" onPress={() => {actions.switchFontAction('middle');;this.popupDialog.dismiss()}} key="button2" />,
						<DialogButton textStyle={{fontSize: 12}} text="小" onPress={() => {actions.switchFontAction('small');;this.popupDialog.dismiss()}} key="button3" />
					]}
				>
					<Text></Text>
				</PopupDialog>
				<ItemGroup>
					<Item>
						<LeftText>账号绑定</LeftText>
						<RightText>已绑定</RightText>
					</Item>
					<Item>
						<LeftText>账号安全</LeftText>
						{Arrow}
					</Item>
				</ItemGroup>

				<ItemGroup>
					<Item>
						<LeftText>消息通知</LeftText>
						<ThemeSwitch />
					</Item>
					<Item>
						<LeftText>白天/夜晚</LeftText>
						<ThemeSwitch 
							onValueChange={() => actions.switchThemeAction(switchFlag)}
							value={switchFlag}
						/>
					</Item>
					<Item>
						<LeftText>字体设置</LeftText>
						<RightText onPress={() => {this.popupDialog.show()}}>{fontSize == 'large' ? '大' : (fontSize == 'middle' ? '中' : '小')}</RightText>
					</Item>
				</ItemGroup>

				<ItemGroup>
					<Item>
						<LeftText>帮助与反馈</LeftText>
						{Arrow}
					</Item>
					<Item>
						<LeftText>关于故事屋</LeftText>
						{Arrow}
					</Item>
				</ItemGroup>

				<Button> 退出登录 </Button>
			</View>
		)
	}
}

Setting.propTypes = {
	switchFlag: PropTypes.bool.isRequired,
	actions: PropTypes.shape({
		switchThemeAction: PropTypes.func.isRequired,
		switchFontAction: PropTypes.func.isRequired
	})
}

const mapStateToProps = (state) => ({
  switchFlag: state.switchFlag,
  fontSize: state.fontSize
});
const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(actionCreators, dispatch)
  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);