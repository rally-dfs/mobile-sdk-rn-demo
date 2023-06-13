import React from 'react';

import {useRef, useEffect} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import {errorMessage} from '../state';

export default function ErrorToast() {
  const [message, setMessage] = useRecoilState(errorMessage);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: message ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    if (message) {
      setTimeout(() => {
        setMessage(undefined);
      }, 6000);
    }
  }, [message, setMessage, fadeAnim]);

  if (!message) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          opacity: fadeAnim,
        },
      ]}>
      <Text style={styles.titleText}>{message.title}</Text>
      <Text style={styles.bodyText}>{message.body}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 60,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    margin: 20,
    zIndex: 9999,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
  },
  bodyText: {
    color: 'white',
    fontSize: 12,
  },
});
