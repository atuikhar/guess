import React from "react";
import { Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

interface Props {
  children: string;
  style?: {};
}

export const TextInfo = ({ children, style }: Props) => {
  return <Text style={(styles.text, style)}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.accent,
    fontSize: 20,
    fontFamily: "open-sans",
  },
});
