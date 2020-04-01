import { SIZE, Value } from './enums';
import { ValuesType } from './types';

const fillValues = () => {
  const values: Array<Value[]> = [];

  for (let x = 0; x < SIZE; x++) {
    if (!values[x]) {
      values[x] = [];
    }

    for (let y = 0; y < SIZE; y++) {
      values[x][y] = Value.null;
    }
  }

  return values;
};

const calculateWinner = (values: ValuesType) => {
  for (let x = 0; x < SIZE; x++) {
    if (!values[x][0]) {
      continue;
    }

    // Check all values in the ROW
    if (values[x].every(value => value === values[x][0])) {
      return values[x][0];
    }
  }

  for (let y = 0; y < SIZE; y++) {
    if (!values[0][y]) {
      continue;
    }

    // Check all values in the COLUMN
    if (values.map(row => row[y]).every(value => value === values[0][y])) {
      return values[0][y];
    }
  }

  if (values[0][0]) {
    if (values.every((value, i) => value[i] === values[0][0])) {
      return values[0][0];
    }
  }

  if (values[SIZE - 1][0]) {
    if (values.every((value, i) => value[SIZE - 1 - i] === values[SIZE - 1][0])) {
      return values[SIZE - 1][0];
    }
  }

  return Value.null;
};

export { fillValues, calculateWinner };