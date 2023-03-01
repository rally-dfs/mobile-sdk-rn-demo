/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
  const [transfering, setTransfering] = useState(false);
  const [balance, setBalance] = useRecoilState(balanceState);

  const sendRly = async () => {
    setTransfering(true);

    await fakeSendRly();

    setBalance(oldBalance => {
      if (!oldBalance) {
        throw 'Something went very wrong, negative balance trying to be set';
      }
      return oldBalance - 1;
    });

    setTransfering(false);
  };

  const logoColor = () => {
    if (balance === 10) {
      return require('../../assets/images/black-logo.png');
    }

    if (balance === 9) {
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
