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
class App extends Component {
  // const App = (props) => {

  state = {
    todos: {
      todo: {
        titile: '',
        description: ''
      }
    }
  }

  componentDidMount() {
    this.gettingAllData()
  }

  componentDidUpdate() {
    this.gettingAllData()
  }

  gettingAllData = () => {
    const url = 'http://localhost:3000/todos'
    fetch(url).
      then((res) =>
        res.json()
      ).then((data) => {
        console.log({ data })
        this.setState({ data })
      })
  }

  /*const*/ handlePress = (item) => () => {
    console.log('handlePress function! item:', item.title)
    this.props.navigation.navigate('TodoView', {
      name: item.title,
      description: item.description
    })
  }

  /*const*/ openCreateForm = () => {
    this.props.navigation.navigate('CreateTodoView')
  }
  render() {
    console.log('the actual state:', this.state.data)
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ flex: 7, backgroundColor: 'green' }}
          // data={this.props.data}
          data={this.state.data}
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
}), { addTodo })(App)