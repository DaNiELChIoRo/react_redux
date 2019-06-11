import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation'; 
import App from './App';
import Todo from '.Todo';

const AppNavigator = createStackNavigator({
    App: {
      screen: App,
    },
    TodoView: {
      screen: Todo,
    },    
  }, {
    // initialRouteName: 'PantallaPrincipal',
  });

  const App = createAppContainer(AppNavigator);

  export default App;