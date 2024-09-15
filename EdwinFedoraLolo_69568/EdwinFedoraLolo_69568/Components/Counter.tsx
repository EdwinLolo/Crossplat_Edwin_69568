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
      <View style={style.buttonContainer}>
        <Button title="Increment" onPress={handleIncrement} />
      </View>
      <View style={style.buttonContainer}>
        <Button title="Decrement" onPress={handleDecrement} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  CounterContainer: {
    padding: 20,
    alignItems: "center",
  },
  buttonContainer: {
    marginVertical: 5,
    width: 100, // Adjust width as needed
  },
});

export default Counter;
