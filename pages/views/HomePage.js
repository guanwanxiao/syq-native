import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// 直接从 react-native-vector-icons 具体的 iocn 功能文件夹下引入
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({ navigation , route}) {
  let tintColor = route.params.tintColor
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color: tintColor}}>Home!</Text>
      <Button title="去Welecome" onPress={ () => { navigation.navigate('Welcome',{ tintColor:'green' })} } />
    </View>
  );
}

function SettingsScreen({navigation,route}) {
  let tintColor = route.params.tintColor
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color: tintColor}}>Settings!</Text>
      <Button title="去Detail" onPress={ () => { navigation.navigate('Detail',{ tintColor:'yellow' }) } } />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={13} />;
}

export default function App({route,navigation}) {
  const { tintColor } = route.params
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
          if(route.name === 'Home'){
            return (
              <HomeIconWithBadge
                  name={
                    focused
                      ? 'logo-codepen'
                      : 'logo-dropbox'
                  }
                  size={size}
                  color={color}
                />
            )
          }else {
            return <Ionicons name="logo-chrome" size={size} color={ activeTintColor }/>
          }
        }
      })}  >
        {/* initialParams 只会加载一次，即使后面的值变了也不会改 */}
        <Tab.Screen name="Home" initialParams={{tintColor}} component={HomeScreen} />
        {/* 通过 initialParams 传递参数 */}
        <Tab.Screen name="Settings" initialParams={{tintColor}} component={SettingsScreen} />
      </Tab.Navigator>

  );
}