/* eslint-disable react-native/no-inline-styles */
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';
import {StandardHeader} from '../components/StandardHeader';
import {account} from '../state';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const rlyAccount = useRecoilValue(account);

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

  return (
    <>
      <StandardHeader />
      <ScreenContainer>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{marginTop: 32, height: 56, width: 56}}
          />
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 16}}>
            @username
          </Text>
          <Text style={{fontSize: 16, marginTop: 8}}>
            {acountHumanReadable()}
          </Text>
          <View style={{marginTop: 48}}>
            <StandardButton
              title="Copy address"
              onPress={async () => {
                Clipboard.setString(rlyAccount || '');
              }}
            />
          </View>
          <View style={{marginTop: 12}}>
            <StandardButton title="View on Explorer" onPress={async () => {}} />
          </View>
          <View style={{marginTop: 12}}>
            <StandardButton
              title="View seed phrase"
              onPress={async () => {
                //@ts-ignore
                navigation.navigate('Seed');
              }}
            />
          </View>
        </View>
      </ScreenContainer>
    </>
  );
}