import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

interface Props {
  children: string;
}

export const NumberContainer = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent,
    fontSize: 50,
    fontFamily: "open-sans-bold",
  },
});
