import React from 'react';
import { View, Text } from 'react-native';
import { ValuesType, SquareProps, SquareState, BoardProps } from './types';
import { fillValues } from './helpers';
import { styles } from './styles';

class Square extends React.Component<SquareProps, SquareState> {
  state = {
    value: '',
  }

  render() {
    return (
      <Text
        style={styles.square}
        onPress={() => this.setState({ value: 'X' })}
      >
        {this.state.value}
      </Text>
    );
  }
}

class Board extends React.Component<BoardProps, { values: ValuesType }> {
  state = {
    values: fillValues(),
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Next player: X</Text>

        <View style={styles.board}>
          {this.state.values.map((row, x) => (
            <View key={x} style={styles.row}>
              {row.map((value, y) => (
                <Square key={y} />
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export { Board };
