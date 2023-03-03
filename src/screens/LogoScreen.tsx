/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {RlyNetwork} from '../../App';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';
import {StandardHeader} from '../components/StandardHeader';
import {balance as balanceState} from '../state';

const DESTINATION_PUBLIC_ADDRESS = '0xdACa431667d69cC1aE79dfeF247A2bb0A1e127C4';

export default function LogoScreen() {
  const [transfering, setTransfering] = useState(false);
  const [balance, setBalance] = useRecoilState(balanceState);

  const sendRly = async () => {
    setTransfering(true);

    await RlyNetwork.transfer(DESTINATION_PUBLIC_ADDRESS, 1);

    const rlyBalance = await RlyNetwork.getBalance();

    setBalance(rlyBalance);
    setTransfering(false);
  };

  const rewardLevelText = () => {
    if (balance === 10 || balance === 0) {
      return '💩';
    }

    if (balance === 9) {
      return '🐸';
    }

    return '🏆';
  };
  return (
    <>
      <StandardHeader />
      {balance === undefined ? (
        <ScreenContainer>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator />
          </View>
        </ScreenContainer>
      ) : (
        <ScreenContainer>
          <View
            style={{
              marginTop: 96,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 243,
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              {rewardLevelText()}
            </Text>
          </View>
          <View
            style={{
              marginTop: 116,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{fontSize: 16}}>Upgrade your RLY Status!</Text>
            <View style={{marginTop: 24}}>
              <StandardButton
                title={transfering ? 'Sending...' : 'Use 1 RLY'}
                disabled={!balance}
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
      )}
    </>
  );
}
