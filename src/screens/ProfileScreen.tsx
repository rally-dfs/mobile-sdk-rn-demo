/* eslint-disable react-native/no-inline-styles */
import Clipboard from '@react-native-clipboard/clipboard';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Linking, Text, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { permanentlyDeleteAccount } from '@rly-network/mobile-sdk';
import InfoButton from '../components/InfoButton';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';
import { StandardHeader } from '../components/StandardHeader';
import { account, userDetails as userDetailsAtom } from '../state';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [rlyAccount, setRlyAccount] = useRecoilState(account);
  const userDetails = useRecoilValue(userDetailsAtom);

  const acountHumanReadable = () => {
    if (!rlyAccount) {
      return '';
    }

    const firstChars = rlyAccount.slice(0, 5);
    const lastChars = rlyAccount.slice(
      rlyAccount.length - 3,
      rlyAccount.length,
    );

    return `${firstChars}...${lastChars}`;
  };

  const resetDemo = async () => {
    await permanentlyDeleteAccount();
    setRlyAccount(undefined);
  };

  return (
    <>
      <StandardHeader />
      <ScreenContainer>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{ marginTop: 32, height: 56, width: 56 }}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>
            @{userDetails?.name}
          </Text>
          <Text style={{ fontSize: 16, marginTop: 8 }}>
            {acountHumanReadable()}
          </Text>
          <View style={{ marginTop: 48 }}>
            <StandardButton
              title="Copy address"
              onPress={async () => {
                Clipboard.setString(rlyAccount || '');
              }}
            />
          </View>
          <View style={{ marginTop: 12 }}>
            <StandardButton
              title="View on Explorer"
              onPress={async () => {
                Linking.openURL(
                  `https://mumbai.polygonscan.com/address/${rlyAccount}`,
                );
              }}
            />
          </View>
          <View style={{ marginTop: 12 }}>
            <StandardButton
              title="View seed phrase"
              onPress={async () => {
                //@ts-ignore
                navigation.navigate('Seed');
              }}
            />
          </View>
          <View style={{ marginTop: 96 }}>
            <StandardButton title="Reset Demo" onPress={resetDemo} />
          </View>
        </View>
      </ScreenContainer>
      <InfoButton>
        <>
          <Text>
            Developers have the ability to display the users public address and
            seed phrase at any point of the application experience.
          </Text>
          <Text style={{ marginTop: 18 }}>
            Viewing on explorer links out to an explorer with the user’s public
            key to verify their on-chain transaction.
          </Text>
        </>
      </InfoButton>
    </>
  );
}
