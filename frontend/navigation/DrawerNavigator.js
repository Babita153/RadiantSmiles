import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import Doctor from '../screens/Doctor';
import Services from '../screens/Services';
import Gallery from '../screens/Gallery';
import MyAppoint from '../screens/MyAppoint';

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown:false,
                drawerActiveTintColor: 'white',
                drawerActiveBackgroundColor: '#B347D9',
            }}>

            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Doctor" component={Doctor} />
            <Drawer.Screen name="Services" component={Services} />
            <Drawer.Screen name="Gallery" component={Gallery} />
            <Drawer.Screen name="MyAppoint" component={MyAppoint} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigator

const styles = StyleSheet.create({})