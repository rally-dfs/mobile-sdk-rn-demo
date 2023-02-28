/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {RecoilRoot} from 'recoil';
import AppRouting from './src/components/AppRouting';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <AppRouting />
    </RecoilRoot>
  );
}

export default App;
