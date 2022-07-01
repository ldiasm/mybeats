import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../screens/login/Login';
import {Home} from '../screens/home/Home';
// import Detail from '../screens/detail/Detail';

const RootStack = createSwitchNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const ScreenNavigation = createAppContainer(RootStack);

export default ScreenNavigation;
