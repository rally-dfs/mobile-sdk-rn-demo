import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//@ts-ignore
import { getAccount } from '@rly-network/mobile-sdk';
import ScreenContainer from './ScreenContainer';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AppAccountSignupScreen from '../screens/AppAccountSignupScreen';
import ClaimScreen from '../screens/ClaimScreen';
import LandingScreen from '../screens/LandingScreen';
import LogoScreen from '../screens/LogoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SeedPhraseScreen from '../screens/SeedPhraseScreen';
import { useRecoilState } from 'recoil';
import { account } from '../state';

const Stack = createNativeStackNavigator();
export default function AppRouting() {
  const [hasLoadedAccount, setHasLoadedAccount] = useState(false);
  const [act, setAct] = useRecoilState(account);

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
  }, [setAct]);

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
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={LogoScreen} />
          <Stack.Screen name="Claim" component={ClaimScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Seed" component={SeedPhraseScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Signup" component={AppAccountSignupScreen} />
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
