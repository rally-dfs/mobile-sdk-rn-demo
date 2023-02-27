/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import AppAccountSignupScreen from './src/screens/AppAccountSignupScreen';
import ClaimScreen from './src/screens/ClaimScreen';

import LandingScreen from './src/screens/LandingScreen';
import LogoScreen from './src/screens/LogoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SeedPhraseScreen from './src/screens/SeedPhraseScreen';

import {getAccount} from 'rly-network-mobile-sdk';
import ScreenContainer from './src/components/ScreenContainer';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [hasLoadedAccount, setHasLoadedAccount] = useState(false);
  const [act, setAct] = useState<string | undefined>(undefined);

  useEffect(() => {
    const loadAccount = async () => {
      const rlyAccount = await getAccount();

      setHasLoadedAccount(true);

      if (!rlyAccount) {
        return;
      }

      setAct(rlyAccount);
    };
    loadAccount();
  }, []);

  if (!hasLoadedAccount) {
    return (
      <ScreenContainer>
        <View style={styles.loadingScreenContainer}>
          <ActivityIndicator />
        </View>
      </ScreenContainer>
    );
  }

  return (
    <NavigationContainer>
      {hasLoadedAccount && act ? (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={LogoScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Seed" component={SeedPhraseScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Signup" component={AppAccountSignupScreen} />
          <Stack.Screen name="Claim" component={ClaimScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
