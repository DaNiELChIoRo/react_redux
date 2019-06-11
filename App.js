/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Navigation from './Navigation'
import store from './store';

// const AppComponent = connect(state => ({
//   todos: state.todos.todos
// }), {})(App)



export default class App extends Component {

  navigate = () => () => {
    this.props.navigation.push('Todo', {
      comicId: comic.id,
      comicTitle: comic.title
    });
  }

  render() {    
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}