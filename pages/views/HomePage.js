import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// 直接从 react-native-vector-icons 具体的 iocn 功能文件夹下引入
import Ionicons from 'react-native-vector-icons/Ionicons';
console.log('Ionicons',Ionicons);

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button title="去Welecome" onPress={ () => { navigation.navigate('Welcome') } } />
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="去Detail" onPress={ () => { navigation.navigate('Detail') } } />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  /* screenOptions 可以接收一个函数，函数默认接收 props 作为参数 */
  return (
      // tarBarIcon 可以使用在 Navigator 上或者使用在 Screen 
      <Tab.Navigator screenOptions={ ({ route }) => ({
        // 更多参数参考 https://reactnavigation.org/docs/bottom-tab-navigator/
        tabBarIcon:( { focused, color, size } ) =>{
          let activeTintColor = '#000';
          // focused 是否点击
          if(focused){
            activeTintColor = 'red'
          }
          return <Ionicons name="facebook" size={size} color={ activeTintColor }/>
        }
      })}  >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>

  );
}