import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import store from './store';


export default class Todo extends Component {

    componentDidMount() {
        // const something = this.props.navigation.getParams('name');
        // console.log(something)
    }

    static navigationOptions = {
        title: 'Home',
      };    

    render() {
        
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