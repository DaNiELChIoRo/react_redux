import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { addTodo } from './actions/todos'
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';

const w = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    titleTextStyle:{
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 15
    },
    inputTextStyle: {
        width: w - (w/5),
        height: 40,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        paddingTop: 15,
        marginHorizontal: 45,
        marginBottom: 15,
        textAlign: 'center'
    },
    detailInputTextStyle: {
        width: w - (w/5),
        height: 40 * 2,
        borderRadius: 12,
        borderColor: 'gray',
        borderWidth: 1,
        paddingTop: 15,
        marginHorizontal: 45,
        marginBottom: 15,
        textAlign: 'center'
    }
})

class CreateTodoView extends Component {

    state={
        txto: '',
        descript: ''
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                <Text style={styles.titleTextStyle}>Title</Text>
                <TextInput
                    style={styles.inputTextStyle}
                    placeholder="Title" onChangeText={(txto) => { this.setState({ txto }) }} />
                <TextInput
                    style={styles.detailInputTextStyle}
                    multiline={true}
                    editable={true}
                    placeholder="Description" onChangeText={(descript) => { this.setState({ descript }) }} />                
                <Button title="Submit" onPress={() => {
                    console.log('button press is going to add ', this.state.txto)
                    this.props.addTodo({
                        title: this.state.txto,
                        // description: this.state.descript
                    })
                }} />
            </View>
        )
    }
}

export default connect(state => ({

}), { addTodo })(CreateTodoView)
