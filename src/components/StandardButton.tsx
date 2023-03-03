import React from 'react';

import {TouchableHighlight, Text, StyleSheet} from 'react-native';

type StandardButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function StandardButton(props: StandardButtonProps) {
  let disabledButtonStyle = {};
  let disabledTextStyle = {};
  if (props.disabled) {
    disabledButtonStyle = styles.disabled;
    disabledTextStyle = styles.disabledText;
  }
  return (
    <TouchableHighlight
      style={[styles.standardButton, disabledButtonStyle]}
      onPress={props.onPress}
      activeOpacity={0.6}
      disabled={props.disabled}
      underlayColor="#D7D7D7">
      <Text style={[styles.buttonText, disabledTextStyle]}>{props.title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  standardButton: {
    borderColor: '#19191B',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: '#FAFAFA',
    width: 221,
  },
  disabled: {
    borderColor: '#81818B',
  },
  buttonText: {
    color: '#19191B',
    fontSize: 16,
    textAlign: 'center',
  },
  disabledText: {
    color: '#81818B',
  },
});
