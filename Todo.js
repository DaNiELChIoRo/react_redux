import React, { Component } from 'react';
import { View, Text } from 'react-native';
import store from './store';


export default class Todo extends Component {

    componentDidMount(){
        // const something = this.props.navigation.getParams();
        console.log('something')
    }


    render(){
        return(
            <View>
                <Text>{'Algo'}</Text>
            </View>
        )
    }
}