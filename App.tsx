/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { RecoilRoot } from 'recoil';
import { RlyMumbaiNetwork, Network } from '@rly-network/mobile-sdk';

import AppRouting from './src/components/AppRouting';

export const RlyNetwork: Network = RlyMumbaiNetwork;

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <AppRouting />
    </RecoilRoot>
  );
}

export default App;
