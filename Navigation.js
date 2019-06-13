import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation'; 
import Home from './Home';
import Todo from './Todo';
import CreateTodo from './CreateTodo';

const AppNavigator = createStackNavigator({
  PantallaPrincipal: {
      screen: Home,
    },
    TodoView: {
      screen: Todo,
    },
    CreateTodoView:{
      screen: CreateTodo,
    }    
  }, {
    // initialRouteName: 'PantallaPrincipal',
  });

  export default createAppContainer(AppNavigator);