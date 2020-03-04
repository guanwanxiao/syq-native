import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default class HomePage extends Component {
  constructor({navigation}) {
     super();
     this.navigation = navigation;
  }
  render() {
    const navigate = this.props.navigation.navigate
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>WelcomePage</Text>
        <Button title="返回home" onPress={() => {
          navigate('Home', { tintColor: 'green' })
        }}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },

});