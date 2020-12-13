// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

export function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const toAppNavigator = (user: signedInUser) => {
    navigation.navigate("AppNavigator", { user: user });
  };

  const toSignup = () => {
    navigation.navigate("SignUp");
  };

  const pressedSignIn = (email: string, password: string) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // userがnullかもしれない対策(firebaseモジュールの仕様？)
        if (!user) throw new Error("user is empty");
        if (!user.user) throw new Error("user.user is empty");
        if (!user.user.email) throw new Error("user.user.email is empty");

        const currentUser: signedInUser = {
          email: user.user.email,
          uid: user.user.uid,
        };

        Alert.alert("サインイン成功！", "正常にサインインできました。");

        toAppNavigator(currentUser);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("エラー！", `${error}`);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.titleAndFieldView}>
          <Text style={styles.screenTitle}>
            世界に1つだけの{"\n"}
            My BirthPlanを作る!
          </Text>
          <TextInput
            style={styles.inputField}
            placeholder=" メールアドレスを入力"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
          <TextInput
            style={styles.inputField}
            placeholder=" パスワードを入力"
            keyboardType="visible-password"
            secureTextEntry={true}
            onChangeText={(password) => {
              setPassword(password);
            }}
          />
        </View>
        <Text style={styles.message}>
          家族全員で{"\n"}
          〜赤ちゃんを迎える準備をしましょう〜
        </Text>
        <View style={styles.includeButtons}>
          <Pressable
            onPress={() => {
              pressedSignIn(email, password);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>サインイン</Text>
          </Pressable>
          <View style={styles.spacer}></View>
          <Pressable
            onPress={() => {
              toSignup();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>新規登録</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC0CB",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "50%",
  },
  titleAndFieldView: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
  },
  screenTitle: {
    fontSize: 30,
    marginBottom: 50,
    textAlign: "center",
    color: "#666666",
    fontWeight: "bold",
  },
  inputField: {
    width: "80%",
    marginBottom: 20,
    height: "18%",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  includeButtons: {
    flex: 4,
    marginVertical: 10,
  },

  spacer: {
    height: 20,
  },
  button: {
    backgroundColor: "#F08080",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: "15%",
    paddingLeft: "15%",
    borderRadius: 70,
    borderWidth: 2,
    borderColor: "#fff",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  message: {
    fontSize: 15,
    marginTop: 50,
    marginBottom: 50,
    textAlign: "center",
    color: "#666666",
  },
});
