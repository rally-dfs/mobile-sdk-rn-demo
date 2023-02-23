/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';

export default function AppAccountSignupScreen() {
  return (
    <ScreenContainer>
      <View style={{marginTop: 192, alignSelf: 'center'}}>
        <Text style={{fontSize: 18}}>Create your demo account</Text>
      </View>
      <View style={{marginTop: 24, alignItems: 'center'}}>
        <TextInput placeholder="Name" style={styles.textInput} />
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
        <StandardButton title="Sign up with app" onPress={() => {}} />
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
