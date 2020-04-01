import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { Value } from './enums';
import { Coordinates, ValuesType, SquareProps, BoardProps } from './types';
import { fillValues, calculateWinner } from './helpers';
import { styles } from './styles';

const Square: React.FC<SquareProps> = React.memo(({ x, y, value, onPress }) => (
  <Text
    style={styles.square}
    onPress={() => onPress({ x, y })}
  >
    {value}
  </Text>
));

const Board: React.FC<BoardProps> = ({ values, onPress }) => (
  <View style={styles.board}>
    {values.map((row, x) => (
      <View key={x} style={styles.row}>
        {row.map((value, y) => (
          <Square
            key={y}
            x={x}
            y={y}
            value={value}
            onPress={onPress}
          />
        ))}
      </View>
    ))}
  </View>
);

const Game: React.FC = () => {
  const [gameState, setGameState] = useState({ isXTurn: true, values: fillValues() });

  const winner: Value = useMemo(() => {
    return calculateWinner(gameState.values);
  }, [gameState]);

  const handlePress = useCallback(({ x, y }: Coordinates) => {
    setGameState(prevGameState => {
      if (calculateWinner(prevGameState.values) || prevGameState.values[x][y]) {
        return prevGameState;
      }

      let newGameState = {
        values: [...prevGameState.values],
        isXTurn: !prevGameState.isXTurn,
      };
      newGameState.values[x][y] = prevGameState.isXTurn ? Value.x : Value.o;

      return newGameState;
    })
  }, []);

  const handleRestart = () => {
    setGameState({ isXTurn: true, values: fillValues() });
  };

  const title = useMemo(() => {
    if (winner) {
      return `Winner is ${winner}`;
    }

    return `${gameState.isXTurn ? 'X' : 'O'} turn`;
  }, [winner, gameState]);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <Board
        values={gameState.values}
        onPress={handlePress}
      />

      <View style={styles.button}>
        <Button
          title="Restart"
          onPress={handleRestart}
        />
      </View>
    </View>
  )
};

export { Game };
