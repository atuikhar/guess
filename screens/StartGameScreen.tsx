import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

export const StartGameScreen = () => {
  const [number, setNumber] = useState("");

  const inputHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setNumber(e.nativeEvent.text);
  };

  const clearInput = () => {
    setNumber("");
  };

  const confirmInputHandler = () => {
    const inputNumber = Number(number);
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: clearInput },
      ]);
    } else {
      console.log("Valid");
    }
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={number}
        onChange={inputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={clearInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 25,
    padding: 15,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 60,
    fontSize: 30,
    borderBottomColor: "#fddf",
    borderBottomWidth: 2,
    color: "#fddf",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
