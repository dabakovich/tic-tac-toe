import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Game } from './src/game';

const App: React.FC = () => (
  <View style={styles.root}>
    <Game />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
