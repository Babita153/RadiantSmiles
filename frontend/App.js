import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './frontend/screens/SplashScreen';
import Welcome from './frontend/screens/Welcome';
import Onboarding from './frontend/screens/Onboarding';
import Onboarding1 from './frontend/screens/Onboarding1';
import BottomTabs from './frontend/navigation/BottomTabs';

import Appointment from './frontend/screens/Appointment';
import Services from './frontend/screens/Services';
import Doctor from './frontend/screens/Doctor';
import Gallery from './frontend/screens/Gallery';
import Review from './frontend/screens/Review';
import Contact from "./frontend/screens/Contact";
import MyAppoint from './frontend/screens/MyAppoint';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />

        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Doctor" component={Doctor} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="MyAppoint" component={MyAppoint} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
