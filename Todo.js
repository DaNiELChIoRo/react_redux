import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import store from './store';


export default class Todo extends Component {

    state = {
        something: ''
    }

    componentDidMount() {
        const something = this.props.navigation.getParam('name', 'deafult name');
        this.setState({something})
        console.log(something)
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('name', 'default Title'),
      });    

    render() {
        console.log('Inside render: ', this.state.something)
        const h = Dimensions.get('window').height;
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: h / 3,
                    alignItems: 'center'
                }}>
                <Text>{'Algo'}</Text>
            </View>
        )
    }
}