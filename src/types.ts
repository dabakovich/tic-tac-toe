import { Value } from "./enums";

type Coordinates = {
  x: number;
  y: number;
};

type ValuesType = Array<Value[]>;

type SquareProps = {};

type SquareState = {
  value: Value;
};

type BoardProps = {};

type BoardState = {
  values: ValuesType;
};

export type {
  Coordinates,
  ValuesType,
  SquareProps,
  SquareState,
  BoardProps,
  BoardState
};
