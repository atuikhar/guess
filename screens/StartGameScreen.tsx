import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Card } from "../components/ui/Card";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { TextInfo } from "../components/ui/TextInfo";
import { Title } from "../components/ui/Title";

import { Colors } from "../constants/colors";

interface Props {
  onPickNumber(pickedNumber: number): void;
}

export const StartGameScreen = ({ onPickNumber }: Props) => {
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
      onPickNumber(inputNumber);
    }
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <TextInfo children={"Enter a Number"}></TextInfo>
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
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 60,
    fontSize: 30,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    color: Colors.accent,
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
