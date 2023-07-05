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
import {PrivateConfig} from './src/private_config';

export const RlyNetwork: Network = RlyMumbaiNetwork;
RlyNetwork.setApiKey(PrivateConfig.RALLY_API_KEY);

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <AppRouting />
      <ErrorToast />
    </RecoilRoot>
  );
}

export default App;
