/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';

const fakeClaim = () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(true);
    }, 1000),
  );
};

export default function ClaimScreen() {
  const [claiming, setClaiming] = useState(false);

  const claimTokens = async () => {
    setClaiming(true);
    await fakeClaim();

    setClaiming(false);
  };
  return (
    <>
      <StandardHeader />
      <ScreenContainer>
        <View style={{marginTop: 192, alignSelf: 'center'}}>
          <Text style={{fontSize: 16}}>
            Let’s get started! Claim your RLY token below!
          </Text>
        </View>
        <View
          style={{
            marginTop: 32,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <StandardButton
            title={claiming ? 'Claiming...' : 'Claim 10 RLY'}
            onPress={claimTokens}
          />

          {claiming && (
            <View style={{marginTop: 12}}>
              <ActivityIndicator />
            </View>
          )}
        </View>
      </ScreenContainer>
    </>
  );
}

function StandardHeader() {
  return (
    <View
      style={{
        height: 112,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFF0',
        backgroundColor: '#F5F5F5',
      }}
    />
  );
}
