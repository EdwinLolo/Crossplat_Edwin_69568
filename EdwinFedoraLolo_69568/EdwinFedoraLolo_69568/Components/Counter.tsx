import { View, Button, Text, StyleSheet } from "react-native";

interface ICounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  Value: number;
}

const Counter = ({ handleIncrement, handleDecrement, Value }: ICounter) => {
  return (
    <View style={style.CounterContainer}>
      <Text>{Value}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
    </View>
  );
};

const style = StyleSheet.create({
  CounterContainer: {
    padding: 20,
    alignItems: "center",
  },
});

export default Counter;
