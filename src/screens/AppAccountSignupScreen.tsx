/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useRecoilState} from 'recoil';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';
import {account, userDetails as userDetailsState} from '../state';
import {
  createAccount as createRlyAccount,
  getAccount,
} from 'rly-network-mobile-sdk';

export default function AppAccountSignupScreen() {
  const navigation = useNavigation();
  const [, setUserDetails] = useRecoilState(userDetailsState);
  const [, setAccount] = useRecoilState(account);

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  const createAccount = async () => {
    setUserDetails({name: name, username: username});

    await createRlyAccount();
    const rlyAct = await getAccount();

    setAccount(rlyAct);

    //@ts-ignore
    navigation.navigate('Claim');
  };

  return (
    <ScreenContainer>
      <View style={{marginTop: 192, alignSelf: 'center'}}>
        <Text style={{fontSize: 18}}>Create your demo account</Text>
      </View>
      <View style={{marginTop: 24, alignItems: 'center'}}>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </View>
      <View style={{marginTop: 12, alignItems: 'center'}}>
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
