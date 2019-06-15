import React, { Component } from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native'
import { addTodo, listTodos } from '../actions/todos'
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
      paddingVertical: 15,      
      alignItems: 'center',
      backgroundColor: 'red'
    }}>
    <Text style={{fontSize: 16}}>{title}</Text>
  </TouchableOpacity>
)

state = { text: 'Todo Title' };
class App extends Component {

  componentDidMount() {
    this.props.listTodos()
  }

  handlePress = (item) => () => {
    console.log('handlePress function! item:', item.title)
    this.props.navigation.navigate('TodoView', {
      name: item.title,
      description: item.description
    })
  }

  openCreateForm = () => {
    this.props.navigation.navigate('CreateTodoView')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ flex: 7, backgroundColor: 'green' }}
          data={this.props.todos}
          // data={this.state.data}
          renderItem={({ item }) => <TodoRow title={item.title} onPress={this.handlePress(item)} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={{ flex: 2 }}>
          <Button title="Add Todo" onPress={this.openCreateForm} />
        </View>
      </SafeAreaView>
    )
  }
}

export default connect(state => ({
  todos: state.todos.todos
}), { addTodo, listTodos })(App)