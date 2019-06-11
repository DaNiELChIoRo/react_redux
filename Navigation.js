import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation'; 
import Home from './Home';
import Todo from './Todo';

const AppNavigator = createStackNavigator({
  PantallaPrincipal: {
      screen: Home,
    },
    TodoView: {
      screen: Todo,
    },    
  }, {
    // initialRouteName: 'PantallaPrincipal',
  });

  export default createAppContainer(AppNavigator);