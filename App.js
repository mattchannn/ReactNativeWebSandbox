import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './src/components/Button';
import StyledText from './src/components/StyledText';
import theme from './src/styles/theme';

const App = () => {
  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>Hello from React Native Web!</StyledText>
      <Button style={overrideStyles}>Log In</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...theme.ALIGN_JUSTIFY_CENTER,
  },
  title: {
    fontSize: theme.H1_FONT,
    color: theme.TEXT_COLOR,
  },
});

const overrideStyles = StyleSheet.create({
  container: {
    margin: theme.MARGIN_DEFAULT,
  },
});

export default App;
