/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Root from './Home'
import store from './store';

// const AppComponent = connect(state => ({
//   todos: state.todos.todos
// }), {})(App)

export default class App extends Component {
  render() {    
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
}