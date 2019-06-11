import React, { Component } from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { addTodo } from './actions/todos'
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

const TodoRow = ({ title, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      alignItems: 'center',
      backgroundColor: 'red',
      paddingHorizonta: 25,
      paddingVertical: 10
    }}>
    <Text>{title}</Text>
  </TouchableOpacity>
)

const App = (props) => {
  const handlePress =  () => {
    console.log('handlePress function!')
    props.navigation.navigate('TodoView', {
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ flex: 7, backgroundColor: 'green' }}
        data={props.todos}
        renderItem={({ item }) => <TodoRow title={item.title} onPress={handlePress} />}
      />
      <View style={{ flex: 2 }}>
        <Button title="Add Todo" onPress={() => props.addTodo({
          title: 'hola'
        })} />
      </View>
    </SafeAreaView>
  )
}

export default connect(state => ({
  todos: state.todos.todos
}), { addTodo })(App)