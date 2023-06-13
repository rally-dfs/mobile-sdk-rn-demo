/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {RecoilRoot} from 'recoil';
import {RlyMumbaiNetwork, Network} from '@rly-network/mobile-sdk';

import AppRouting from './src/components/AppRouting';
import ErrorToast from './src/components/ErrorToast';

export const RlyNetwork: Network = RlyMumbaiNetwork;

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <AppRouting />
      <ErrorToast />
    </RecoilRoot>
  );
}

export default App;
