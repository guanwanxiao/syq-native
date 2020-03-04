import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
export default class HomePage extends Component {
  constructor({navigation}) {
    super();
  }

  render() {
    let tintColor = this.props.route.params.tintColor
    return (
      <View>
        <Text style={{color:tintColor}}>这里是 Detail</Text>
        <Button title='button' onPress={ () => { this.props.navigation.navigate('Home') } } />
      </View>
    )
  }
}