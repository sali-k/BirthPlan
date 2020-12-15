import React, { useCallback } from "react";
import { StyleSheet, Text, View, Alert, Button, Linking } from "react-native";
// import * as firebase from "firebase";
// import "firebase/firestore";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";

export function HelpScreen() {
  const navigation = useNavigation();
  const toIdea_1 = () => {
    navigation.navigate("LaborPain");
  };
  const toIdea_2 = () => {
    navigation.navigate("Delivery");
  };
  const toIdea_3 = () => {
    navigation.navigate("Postpartum");
  };

  //お問い合わせフォーム
  const supportedURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfqvd7wdOAVVffsezp0xO8lH8O_RhfllkYljIw3lf_gSe9LsQ/viewform?usp=sf_link";
  const unsupportedURL = "slack://open?team=123456";

  // @ts-ignore
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };

  return (
    <View style={styles.container}>
      <>
        <View style={styles.title}>
          <Text style={styles.titleText}>BirthPlanとは？</Text>
        </View>
        <Text style={styles.aboutBP}>
          【バースプランとは】{"\n"}
          どのような出産をしたいのか、自分の出産計画を立てることです。{"\n"}
          バースプランを活用して、妊婦さんが抱いているお産への不安や希望を助産師へ相談することで、安心して赤ちゃんの誕生と育児のスタートを迎えましょう♪
        </Text>
      </>
      <>
        <View style={styles.title}>
          <Text style={styles.titleText}>実例紹介</Text>
        </View>
        <View style={styles.Buttons}>
          <FAB
            style={styles.addButton}
            icon="account-supervisor"
            onPress={toIdea_1}
          />
          <FAB
            style={styles.addButton}
            icon="face-outline"
            onPress={toIdea_2}
          />
          <FAB
            style={styles.addButton}
            icon="star-face"
            star-face
            onPress={toIdea_3}
          />
        </View>
      </>
      <>
        <View style={styles.title}>
          <Text style={styles.titleText}>助産師へ相談</Text>
        </View>
        <View style={styles.URL}>
          <OpenURLButton url={supportedURL}>相談する</OpenURLButton>
        </View>
      </>
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFBEDA",
    alignItems: "center",
    justifyContent: "center",
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
    height: "25%",
    borderWidth: 2,
    borderColor: "#fff",
    fontSize: 18,
    padding: 10,
  },
  addButton: {
    // position: "absolute",
    color: "#fff",
    backgroundColor: "#FF5192",
    margin: "5%",
  },
  Buttons: {
    flexDirection: "row",
  },
  URL: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#F08080",
    borderRadius: 20,
    padding: 5,
  },
});
