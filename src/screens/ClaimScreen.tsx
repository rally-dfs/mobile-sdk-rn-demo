/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {RlyNetwork} from '../../App';
import InfoButton from '../components/InfoButton';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';
import {StandardHeader} from '../components/StandardHeader';
import {balance as balanceState} from '../state';
import {sleep} from '../utils';

export default function ClaimScreen() {
  const navigation = useNavigation();
  const [claiming, setClaiming] = useState(false);
  const [, setBalance] = useRecoilState(balanceState);

  const claimTokens = async () => {
    setClaiming(true);

    await RlyNetwork.registerAccount();

    let newBalance = await RlyNetwork.getBalance();

    while (newBalance !== 10) {
      sleep(1000);
      newBalance = await RlyNetwork.getBalance();
    }

    setBalance(newBalance);
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

      <InfoButton>
        <>
          <Text>
            Once the crypto account is created on behalf of the user by the
            developer, their account can be prefunded with a fixed amount of RLY
            token (Benefit for apps that are powered by RLY token).
          </Text>
          <Text style={{marginTop: 18}}>
            In this example, 10 RLY will be distributed to the user’s crypto
            account funded by RLY Network Association in a gasless transaction.
          </Text>
        </>
      </InfoButton>
    </>
  );
}
