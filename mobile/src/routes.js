import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login/index';
import Home from  './pages/Home/index';


const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Home
  })
);

export default Routes;