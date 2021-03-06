import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawerContentComponent from '../src/components/SideMenu/index';

import Login from './pages/Login/index';
import Home from  './pages/Home/index';

const Routes = createAppContainer(
    createDrawerNavigator({
      Login,
      Home
    },{ contentComponent: CustomDrawerContentComponent,          
    })
  );

export default Routes;