import React, { useState, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
  View,
} from "react-native";
import firebase from "firebase";
/* components */
import { Form } from "../components/Form";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
/* contexts */
import { UserContext } from "../contexts/userContext";
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import babyLogo from "../assets/baby.jpg";

type Props = {
  navigation: StackNavigationProp<AppNavigatorParamList, "User">;
  route: RouteProp<AppNavigatorParamList, "User">;
};

export const UserScreen: React.FC<Props> = (props: Props) => {
  const currentUser = props.route.params.user;
  const { user, setUser } = useContext<UserContextValue>(UserContext);

  //データベースを参照
  const getUserDocRef = async () => {
    return await firebase.firestore().collection("User");
  };

  const sendUser = async (name: string, user: signedInUser) => {
    if (name != "") {
      const docRef = await getUserDocRef();
      const newUser = {
        name: name,
        userId: user.uid,
      };
      await docRef.doc(user.uid).set(newUser);
      Alert.alert("ようこそ！", "お名前の登録が完了しました。");
    } else {
      Alert.alert("エラー", "お名前を入力してください！");
    }
  };

  const [name, setName] = useState<string>(user.name);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={babyLogo} style={styles.image}>
        <View style={styles.text}>
          <Text style={styles.text1}>My BirthPlan</Text>
          <Text style={styles.text2}>What's your name?</Text>
        </View>
        <View style={styles.textName}>
          <Form
            value={name}
            onChangeText={(text) => setName(text)}
            label="お名前"
          />
        </View>
        <View style={styles.userBtn}>
          <Button onPress={() => sendUser(name, currentUser)} text="保存する" />
        </View>
        <Loading visible={loading} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "#FF367F",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 10,
  },
  text1: {
    color: "#FF367F",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  text2: {
    color: "#FF367F",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  textName: {
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  userBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
});
