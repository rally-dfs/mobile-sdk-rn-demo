import React from 'react';

import {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

type Props = PropsWithChildren<{}>;

export default function ScreenContainer({children}: Props) {
  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={style.screenContainer}>{children}</View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    flex: 1,
  },
});
