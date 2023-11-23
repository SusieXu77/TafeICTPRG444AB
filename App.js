import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';




import HomeScreen from './Screens/Home'
import AddNew from './Screens/AddNew'
import StaffDetails from './Screens/StaffDetails'

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" useLegacyImplementation screenOptions={styles.navigatorHeading}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Staff Profile Details" component={StaffDetails} />
        <Drawer.Screen name="Add New" component={AddNew} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = require('./Styles');