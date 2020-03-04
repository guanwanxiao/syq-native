import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default class HomePage extends Component {
  constructor({navigation}) {
     super();
     this.navigation = navigation;
  }
  render() {
    const navigate = this.props.navigation.navigate;
    const tintColor = this.props.route.params.tintColor;
    let obj = Object.assign({},styles.welcome,{ color:tintColor })
    return (
      <View style={styles.container}>
        <Text style={obj}>WelcomePage</Text>
        <Button title="返回home" onPress={() => {
          navigate('Home', { tintColor: '#999' })
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