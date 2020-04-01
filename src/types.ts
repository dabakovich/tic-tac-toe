import { Value } from "./enums";

type Coordinates = {
  x: number;
  y: number;
};

type ValuesType = Array<Value[]>;

type SquareProps = {
  x: number;
  y: number;
  value: Value;
  onPress: (coordinates: Coordinates) => void;
};

type BoardProps = {
  values: ValuesType;
  onPress: (coordinates: Coordinates) => void;
};

export type { Coordinates, ValuesType, SquareProps, BoardProps, };
