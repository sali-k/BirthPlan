import * as firebase from "firebase";
import "firebase/firestore";
//ファイヤーベースの認証機能（サインインとか）
import "firebase/auth";
import env from "./env.json";
//ワーニング（黄色い警告）を非表示にする
import { LogBox } from "react-native";

//特定のWARNINGを非表示する
LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

//ファイヤーベースに繋ぐためにfireConfigを作る
export const fireConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DB_URL,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE,
  messagingSenderId: env.FIREBASE_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  // measurementId: env.FIREBASE_MEASUREMENT_ID,
};

//ファイヤーベースを初期化（定型文）
//初期化されると0ではなくなる
if (firebase.apps.length === 0) {
  firebase.initializeApp(fireConfig);
}

export const updateUser = async (userId: string, params: any) => {
  await firebase.firestore().collection("users").doc(userId).update(params);
};
