import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Board } from './src/game';

class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
