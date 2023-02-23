/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';
export default function LandingScreen(): JSX.Element {
  return (
    <ScreenContainer>
      <View style={styles.welcomeContainer}>
        <Image
          source={require('../../assets/images/black-logo.png')}
          style={styles.logoImage}
        />
        <View style={{marginTop: 96}}>
          <StandardButton title="Sign up with app" onPress={() => {}} />
          <View style={{marginTop: 12}}>
            <StandardButton title="Continue as guest" onPress={() => {}} />
          </View>
        </View>
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
