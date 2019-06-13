import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import store from './store';


export default class Todo extends Component {

    state = {
        something: '',        
    }

    componentDidMount() {
        const description = this.props.navigation.getParam('description');
        this.setState({description})        
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
                <Text>{this.state.description}</Text>
            </View>
        )
    }
}