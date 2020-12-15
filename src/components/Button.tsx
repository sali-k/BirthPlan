import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF367F",
    height: 40,
    margin: 16,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
};

export const Button: React.FC<Props> = ({ onPress, text }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
