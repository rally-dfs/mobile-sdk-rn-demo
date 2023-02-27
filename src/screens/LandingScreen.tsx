/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';
import {createAccount, getAccount} from 'rly-network-mobile-sdk';

export default function LandingScreen(): JSX.Element {
  const navigation = useNavigation();
  const [takingAction, setTakingAction] = useState(false);

  const setupAsGuest = async () => {
    setTakingAction(true);

    const act = await getAccount();

    if (!act) {
      console.log('No account found, creating a RLY account on device');
      await createAccount();
    }
    //@ts-ignore
    navigation.navigate('Claim');
  };

  return (
    <ScreenContainer>
      <View style={styles.welcomeContainer}>
        <Image
          source={require('../../assets/images/black-logo.png')}
          style={styles.logoImage}
        />
        <View style={{marginTop: 96}}>
          <StandardButton
            title="Sign up with app"
            onPress={() => {
              //@ts-ignore
              navigation.navigate('Signup');
            }}
          />
          <View style={{marginTop: 12}}>
            <StandardButton title="Continue as guest" onPress={setupAsGuest} />
          </View>
        </View>
        {takingAction && (
          <View style={{marginTop: 32}}>
            <ActivityIndicator />
          </View>
        )}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 243,
    height: 243,
  },
});
