/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {useRecoilState} from 'recoil';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';
import {StandardHeader} from '../components/StandardHeader';
import {balance as balanceState} from '../state';

function fakeSendRly() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(undefined);
    }, 1000);
  });
}

export default function LogoScreen() {
  const [fakeBalance, setFakeBalance] = useState(10);
  const [transfering, setTransfering] = useState(false);
  const [, setBalance] = useRecoilState(balanceState);

  useEffect(() => {
    setBalance(8);
  }, [setBalance]);

  const sendRly = async () => {
    setTransfering(true);

    await fakeSendRly();

    setFakeBalance(oldBalance => oldBalance - 1);

    setTransfering(false);
  };

  const logoColor = () => {
    if (fakeBalance === 10) {
      return require('../../assets/images/black-logo.png');
    }

    if (fakeBalance === 9) {
      return require('../../assets/images/orange-logo.png');
    }

    return require('../../assets/images/green-logo.png');
  };
  return (
    <>
      <StandardHeader />
      <ScreenContainer>
        <View
          style={{
            marginTop: 96,
            alignItems: 'center',
          }}>
          <Image
            source={logoColor()}
            style={{height: 243, width: 243, alignSelf: 'center'}}
          />
        </View>
        <View
          style={{
            marginTop: 116,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 16}}>Upgrade your RLY Logo color!</Text>
          <View style={{marginTop: 24}}>
            <StandardButton
              title={transfering ? 'Sending...' : 'Use 1 RLY'}
              onPress={sendRly}
            />
          </View>

          {transfering && (
            <View style={{marginTop: 12}}>
              <ActivityIndicator />
            </View>
          )}
        </View>
      </ScreenContainer>
    </>
  );
}
