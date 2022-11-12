import React from 'react';
import {View, StyleSheet} from 'react-native';
import StyledText from './src/components/StyledText';
import theme from './src/styles/theme';

const App = () => {
  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>Hello from React Native Web!</StyledText>
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

export default App;
