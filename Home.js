import React, { Component } from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native'
import { addTodo } from './actions/todos'
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputTextStyle: {
    height: 40,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingTop: 15,
    marginHorizontal: 45
  }
});

const TodoRow = ({ title, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      pading: 15,
      alignItems: 'center',
      backgroundColor: 'red'
    }}>
    <Text>{title}</Text>
  </TouchableOpacity>
)

state = { text: 'Todo Title' };

const App = (props) => {
  const handlePress = (item) => () => {
    console.log('handlePress function! item:', item.title)
    props.navigation.navigate('TodoView', {
      name: item.title,
      description: item.description
    })
  }

  const openCreateForm = () => {
    props.navigation.navigate('CreateTodoView')
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ flex: 7, backgroundColor: 'green' }}
        data={props.todos}
        renderItem={({ item }) => <TodoRow title={item.title} onPress={handlePress(item)} />}
      />
      <View style={{ flex: 2 }}>
        <Button title="Add Todo" onPress={openCreateForm} />
      </View>
    </SafeAreaView>
  )
}

export default connect(state => ({
  todos: state.todos.todos
}), { addTodo })(App)