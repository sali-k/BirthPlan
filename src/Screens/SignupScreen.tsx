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
  StatusBar,
  SafeAreaView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

export function SignupScreen() {
  //TextInputに入力された値を保持し、変化があったら更新をかけられるようにuseStateを使用する。
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const back = () => {
    navigation.goBack();
  };

  //Submitが押されたときにSign Up(登録処理)する関数
  const pressedSubmit = (email: string, password: string) => {
    //ここでFirebaseでの登録
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      //成功したらthenの中が呼ばれるよ！
      .then((user) => {
        //登録成功したらログイン画面に戻る
        Alert.alert("登録成功！", "サインインできるようになりました");
        //back();で、前の画面に戻る！エラーが出るので今はコメントアウト！
        back();
      })
      .catch((error) => {
        //エラーが返ってきたらその内容をアラートで表示
        console.log(error);
        Alert.alert("エラー", `${error}`);
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
            //入力欄が空白のときに薄く表示される文字の内容
            //１番左にスペース半角を1つ入れてあげるといい感じの見た目に！
            placeholder=" メールアドレスを入力"
            //キーボードの種類
            keyboardType="email-address"
            //大文字にしないように設定
            autoCapitalize="none"
            //値(入力された文字)に変化があった場合に変数emailの値を更新する
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
          <TextInput
            style={styles.inputField}
            placeholder=" パスワードを入力"
            keyboardType="visible-password"
            //入力した文字が何かわからないように隠れる機能
            secureTextEntry={true}
            //値(入力された文字)に変化があった場合に変数passwordの値を更新する
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
              pressedSubmit(email, password);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>新規登録</Text>
          </Pressable>
          <View style={styles.spacer}></View>
          <Pressable
            onPress={() => {
              back();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>戻る</Text>
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
    marginBottom: 50,
    textAlign: "center",
    color: "#666666",
  },
});
