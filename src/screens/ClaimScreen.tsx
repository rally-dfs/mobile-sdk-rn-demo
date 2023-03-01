/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useRecoilState} from 'recoil';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';
import {StandardHeader} from '../components/StandardHeader';
import {balance as balanceState} from '../state';

const fakeClaim = () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(true);
    }, 1000),
  );
};

export default function ClaimScreen() {
  const navigation = useNavigation();
  const [claiming, setClaiming] = useState(false);
  const [, setBalance] = useRecoilState(balanceState);

  const claimTokens = async () => {
    setClaiming(true);

    await fakeClaim();
    setBalance(b => (b || 0) + 10);

    setClaiming(false);

    //@ts-ignore
    navigation.navigate('Home');
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
