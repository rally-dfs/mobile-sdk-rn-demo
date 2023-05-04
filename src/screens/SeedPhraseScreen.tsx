/* eslint-disable react-native/no-inline-styles */
import Clipboard from '@react-native-clipboard/clipboard';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import StandardButton from '../components/StandardButton';
import { StandardHeader } from '../components/StandardHeader';
import { getAccountPhrase } from '@rly-network/mobile-sdk';
import InfoButton from '../components/InfoButton';

export default function SeedPhraseScreen() {
  const [didConfirm, setDidConfirm] = useState(false);
  const [seed, setSeed] = useState<undefined | string>();

  useEffect(() => {
    const doAsyncWork = async () => {
      if (!didConfirm) {
        return;
      }

      const tmpSeed = await getAccountPhrase();
      setSeed(tmpSeed);
    };
    doAsyncWork();
  }, [didConfirm]);

  return (
    <>
      <StandardHeader />
      <ScreenContainer>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 96 }}>
            Never disclose your seed phrase.
          </Text>

          {!didConfirm && (
            <View style={{ marginTop: 48 }}>
              <StandardButton
                title="I understand"
                onPress={() => {
                  setDidConfirm(true);
                }}
              />
            </View>
          )}

          {didConfirm && (
            <>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 24,
                  fontStyle: 'italic',
                  paddingHorizontal: 48,
                }}>
                {seed}
              </Text>
              <View style={{ marginTop: 48 }}>
                <StandardButton
                  title="Copy seed phrase"
                  onPress={async () => {
                    Clipboard.setString(seed || '');
                  }}
                />
              </View>
            </>
          )}
        </View>
      </ScreenContainer>

      <InfoButton>
        <PreConfirmInfo />
      </InfoButton>
    </>
  );
}

function PreConfirmInfo() {
  return (
    <>
      <Text>
        It’s important to educate users to keep their seed phrases safe and how
        it can be used to import to another device or external wallet.
      </Text>
    </>
  );
}
