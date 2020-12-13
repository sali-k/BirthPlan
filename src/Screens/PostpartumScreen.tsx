import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { useNavigation, RouteProp } from "@react-navigation/native";

type PostpartumScreenRouteProps = RouteProp<RootStackParamList, "Postpartum">;
type Props = {
  route: PostpartumScreenRouteProps;
};

export function PostpartumScreen(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>お産後</Text>
      </View>
      <Text style={styles.aboutBP}>
        【お産後〜退院まで】{"\n"}
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
    // justifyContent: "center",
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
    // paddingRight: 20,
    // paddingLeft: 20,
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
