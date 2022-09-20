import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Card = ({ children }: Props) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 25,
    padding: 15,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
