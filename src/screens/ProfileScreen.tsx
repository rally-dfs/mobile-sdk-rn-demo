/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';

export default function ProfileScreen() {
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
          <Text style={{fontSize: 16, marginTop: 8}}>OxFoo...bar</Text>
          <View style={{marginTop: 48}}>
            <StandardButton title="Copy address" onPress={async () => {}} />
          </View>
          <View style={{marginTop: 12}}>
            <StandardButton title="View on Explorer" onPress={async () => {}} />
          </View>
          <View style={{marginTop: 12}}>
            <StandardButton title="View seed phrase" onPress={async () => {}} />
          </View>
        </View>
      </ScreenContainer>
    </>
  );
}

function StandardHeader() {
  return (
    <View
      style={{
        height: 112,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFF0',
        backgroundColor: '#F5F5F5',
      }}
    />
  );
}
