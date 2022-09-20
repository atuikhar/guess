import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

interface Props {
  children: string;
}

export const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    padding: 12,
    fontSize: 24,
    color: Colors.accent,
    textAlign: "center",
    borderWidth: 3,
    borderColor: Colors.accent,
    borderRadius: 30,
  },
});
