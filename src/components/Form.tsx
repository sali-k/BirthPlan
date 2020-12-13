import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

type Props = {
  onChangeText: (text: string) => void;
  value: string;
  label: string;
};

export const Form: React.FC<Props> = ({
  value,
  onChangeText,
  label,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "#FF367F",
    borderBottomWidth: 2,
    fontSize: 30,
    color: "#666666",
  },
  label: {
    fontWeight: "bold",
    color: "#FF367F",
    fontSize: 20,
  },
});
