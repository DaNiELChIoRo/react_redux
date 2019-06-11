import React, { Component } from 'react';
import store from './store';


export default class Todo extends Component {

    componentDidMount(){
        const something = this.props.navigation.getParams();
        console.log(something)
    }


    render(){
        return(
            <View>
                <Text>{{}}</Text>
            </View>
        )
    }
}