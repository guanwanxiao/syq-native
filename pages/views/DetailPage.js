import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
export default class HomePage extends Component {
  constructor({navigation}) {
    super();
    this.navigation = navigation;
  }

  render() {
    return (
      <View>
        <Text>这里是 Detail</Text>
        <Button title='button' onPress={ () => { this.navigation.navigate('Home') } } />
      </View>
    )
  }
}