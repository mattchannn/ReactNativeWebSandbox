import React from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    minWidth: 250,
    borderWidth: 2,

    /**
     * This is the only difference between Button.jsx and Button.web.jsx
     */
    borderRadius: 20,

    borderColor: theme.BUTTON_BASE_COLOR,
    backgroundColor: theme.BUTTON_BASE_COLOR,
    cursor: 'pointer',
  },
  text: {
    color: theme.TEXT_COLOR,
    fontSize: 18,
  },
});

export default function Button({style, children}) {
  console.log(style);
  return (
    <View style={{...styles.container, ...(style?.container ?? null)}}>
      <Pressable>
        <Text style={{...styles.text, ...(style?.text ?? null)}}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
