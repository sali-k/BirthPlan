import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  Button,
} from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import firebase from "firebase";
import { ChatItem } from "../ChatItem";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { loadAll } from "../Store";
import { FAB, List, BottomNavigation } from "react-native-paper";
import moment from "moment";

type HomeScreenRouteProps = RouteProp<RootStackParamList, "Home">;
type Props = {
  route: HomeScreenRouteProps;
};

// export function HomeScreen(props: Props) {
//   const currentUser = props.route.params.user;
export function HomeScreen() {
  const navigation = useNavigation();
  const back = () => {
    navigation.goBack();
  };
  // const [text, setText] = useState<string>("");
  // const [messages, setMessages] = useState<Message[]>([]);

  const [plans, setPlans] = useState<B_Plan[]>([]);

  //DBから読み込む
  // const getMessageDocRef = async () => {
  //   return await firebase.firestore().collection("plans").doc();
  // };

  // useEffectは最初にページが読み込まれた時に呼び出される
  useEffect(() => {
    // asyncで非同期で読み込みとstate更新を定義
    const initialize = async () => {
      // awaitで読み込みが終わるまで待機
      const newMemos = await loadAll();
      setPlans(newMemos);
    };
    // 画面が戻ってきた時に動作するようにnavigationの動作に追加
    navigation.addListener("focus", initialize);
  });

  // Compose画面に移動する関数を用意
  const toPlan = () => {
    navigation.navigate("Plan");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={plans}
        renderItem={({ item }) => (
          <List.Item
            style={styles.item}
            title={item.text}
            titleNumberOfLines={5}
            description={`作成日時：${moment(item.createdAt).format(
              "yyyy-MM-DD ddd HH:mm"
            )}`}
            descriptionStyle={styles.description}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <FAB
        style={styles.addButton}
        icon="file-document-edit-outline"
        onPress={toPlan}
      />
      <StatusBar style="auto" />
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
  item: {
    minWidth: "90%",
    flexDirection: "column",
    borderWidth: 3,
    borderColor: "#FF5192",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
  },
  description: {
    flex: 1,
    textAlign: "right",
  },
  addButton: {
    position: "absolute",
    right: 16,
    bottom: 16,
    color: "#fff",
    backgroundColor: "#FF5192",
  },
});
