import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  board: {},
  title: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 64,
    height: 64,
    margin: 4,
    fontSize: 32,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export { styles };