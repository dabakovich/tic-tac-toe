import { SIZE, Value } from './enums';
import { ValuesType } from './types';

const fillValues = () => {
  const values: ValuesType = [];

  for (let x = 0; x < SIZE; x++) {
    if (!values[x]) {
      values[x] = [];
    }

    for (let y = 0; y < SIZE; y++) {
      values[x][y] = '';
    }
  }

  return values;
};

/**
 * Please put here your implementation of the winner calculation
 * 
 * @param values 
 */
const calculateWinner = (values: ValuesType): Value => {

  return '';
};

export { fillValues, calculateWinner };