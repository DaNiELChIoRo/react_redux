import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation'; 
import Home from './screens/Home';
import Todo from './screens/Todo';
import CreateTodo from './screens/CreateTodo';

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