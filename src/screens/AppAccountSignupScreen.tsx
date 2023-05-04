/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useRecoilState } from 'recoil';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';
import { account, userDetails as userDetailsState } from '../state';
import {
  createAccount as createRlyAccount,
  getAccount,
} from '@rly-network/mobile-sdk';
import InfoButton from '../components/InfoButton';

export default function AppAccountSignupScreen() {
  const navigation = useNavigation();
  const [, setUserDetails] = useRecoilState(userDetailsState);
  const [, setAccount] = useRecoilState(account);

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  const createAccount = async () => {
    setUserDetails({ name: name, username: username });

    await createRlyAccount();
    const rlyAct = await getAccount();

    setAccount(rlyAct);

    //@ts-ignore
    navigation.navigate('Claim');
  };

  return (
    <>
      <ScreenContainer>
        <View style={{ marginTop: 192, alignSelf: 'center' }}>
          <Text style={{ fontSize: 18 }}>Create your demo account</Text>
        </View>
        <View style={{ marginTop: 24, alignItems: 'center' }}>
          <TextInput
            placeholder="Name"
            style={styles.textInput}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </View>
        <View style={{ marginTop: 12, alignItems: 'center' }}>
          <TextInput placeholder="Username" style={styles.textInput} />
        </View>
        <View
          style={{
            marginTop: 48,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <StandardButton
            title="Sign up with app"
            onPress={() => {
              createAccount();
            }}
          />
        </View>
      </ScreenContainer>
      <InfoButton>
        <>
          <Text>
            ‘Sign up with app’ allows users to create an app level account.
            Developers can choose when to create a crypto account and map it to
            the app account.
          </Text>
          <Text style={{ marginTop: 18 }}>
            Account generation is done using BIP39 mnemonic generation to create
            a hierarchical-deterministic (HD) wallet. This then uses this
            mnemonic to extract a private key from the default Ethereum path.
          </Text>
          <Text style={{ marginTop: 18 }}>
            Storage utilizes hardware encryption and low level OS key storage
            technology. This is the same technology that powers all iOS
            passphrase and keychain encryption technologies.
          </Text>
          <Text style={{ marginTop: 18 }}>Learn more at devproperly.com</Text>
        </>
      </InfoButton>
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1.5,
    borderColor: '#000000',
    padding: 8,
    borderRadius: 8,
    width: 283,
  },
});
