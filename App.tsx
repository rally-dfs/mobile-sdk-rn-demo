/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AppAccountSignupScreen from './src/screens/AppAccountSignupScreen';
import ClaimScreen from './src/screens/ClaimScreen';

import LandingScreen from './src/screens/LandingScreen';
import LogoScreen from './src/screens/LogoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SeedPhraseScreen from './src/screens/SeedPhraseScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  // return <LandingScreen />;
  // return <AppAccountSignupScreen />;
  // return <ClaimScreen />;
  // return <LogoScreen />;
  // return <ProfileScreen />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Signup" component={AppAccountSignupScreen} />
        <Stack.Screen name="Claim" component={ClaimScreen} />
        <Stack.Screen name="Home" component={LogoScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Seed" component={SeedPhraseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
