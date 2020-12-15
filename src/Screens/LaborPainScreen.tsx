import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// import * as firebase from "firebase";
// import "firebase/firestore";

export function LaborPainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>陣痛時</Text>
      </View>
      <Text style={styles.aboutBP}>
        【陣痛開始〜分娩室入室まで】{"\n"}
        ○○○○○○○○○○○○○○○○○○{"\n"}
        ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○
        ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○
      </Text>
      <View style={styles.title}>
        <Text style={styles.titleText}>バースプラン例の紹介</Text>
      </View>
      <Text style={styles.Text}>・＊＊＊＊＊＊＊＊＊＊＊＊</Text>
      <Text style={styles.Text}>・＊＊＊＊＊＊＊＊＊＊＊＊</Text>
      <Text style={styles.Text}>・＊＊＊＊＊＊＊＊＊＊＊＊</Text>
      <Text style={styles.Text}>・＊＊＊＊＊＊＊＊＊＊＊＊</Text>
      <Text style={styles.Text}>・＊＊＊＊＊＊＊＊＊＊＊＊</Text>
      <Text style={styles.Text}>・＊＊＊＊＊＊＊＊＊＊＊＊</Text>
      <Text style={styles.Text}>・＊＊＊＊＊＊＊＊＊＊＊＊</Text>
      <Text style={styles.Text}>・＊＊＊＊＊＊＊＊＊＊＊＊</Text>
      <Text style={styles.Text}>・＊＊＊＊＊＊＊＊＊＊＊＊</Text>
      <Text style={styles.Text}>・＊＊＊＊＊＊＊＊＊＊＊＊</Text>
      <Text style={styles.Text}>・＊＊＊＊＊＊＊＊＊＊＊＊</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFBEDA",
    alignItems: "center",
  },
  title: {
    backgroundColor: "#F08080",
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
    marginTop: 20,
    marginBottom: 10,
  },
  titleText: {
    minWidth: "90%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  aboutBP: {
    backgroundColor: "#fff",
    width: "90%",
    height: "20%",
    borderWidth: 2,
    borderColor: "#fff",
    fontSize: 18,
    padding: 10,
  },
  Text: {
    fontSize: 18,
    textAlign: "left",
    marginBottom: "3%",
  },
});
