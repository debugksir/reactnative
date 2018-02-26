import { TabNavigator, StackNavigator  } from 'react-navigation';
import MeScreen from '../containers/me';
import HomeScreen from '../containers/home';
import ShopScreen from '../containers/shop';
import Setting from '../pages/setting/setting';
import ToSetting from '../components/me/header';
import Article from '../pages/article/article';
import Other from '../pages/other/other';

const TabNav = TabNavigator({
  Shop: { screen: ShopScreen },
  Home: { screen: HomeScreen },
  Me: { screen: MeScreen },
},{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#03C3D6',
    inactiveTintColor: '#484848',
    showIcon: true,
    labelStyle: {
      fontSize: 10
    },
    tabStyle: {
      marginTop: 3,
      height: 44,
      justifyContent: 'space-around'
    },
    style: {
      paddingTop: 4,
      backgroundColor: '#EEEEEE',
      borderStyle: 'solid',
      borderTopColor: '#D1D1D1',
      borderTopWidth: 1
    }
  }
});

const StackNav = StackNavigator({
	TabNav: {
		screen: TabNav,
		navigationOptions: {
	        headerStyle: {
	        	height: 0
	        }
	    }
	},
	Setting: {
		screen: Setting
	},
	ToSetting: {
		screen: ToSetting
	},
  Article: {
    screen: Article
  },
  Other: {
    screen: Other
  }
})

export default StackNav

// import { connect } from 'react-redux';
// const mapStateToProps = (state) => ({
//     switchFlag: state.switchFlag,
//     fontSize: state.fontSize
// })
// const Root = connect(mapStateToProps)(TabNav);