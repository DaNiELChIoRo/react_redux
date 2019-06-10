import React, { Component } from 'react'
import {FlatList, StyleSheet, Text, View, Button} from 'react-native'
import { addTodo } from './actions/todos'
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

const App = (props) => (
    <View style={styles.container}>
        <FlatList
            data={props.todos}
            renderItem={(item) => <Text>{item.title}</Text>}
        />
        <View style={{ flex: 2 }}>
            <Button title="Add Todo" onPress={() => props.addTodo({
                title: 'hola'
            })} />
        </View>
    </View>
)

export default connect(state => ({
    todos: state.todos.todos
}), {addTodo})(App)