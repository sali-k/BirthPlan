import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

// ストレージの初期化
const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  // defaultExpires: 1000 * 3600 * 24, //milliseconds 24時間
  defaultExpires: null,
  enableCache: true,
});

const key = "memo";

export const save = (text: string, createdAt: number) => {
  storage.save({
    key: key, // データの合言葉 keyでアンダースコア（"_"）を使用しないでください
    id: `${createdAt}`, // これがないと常に上書きになってしまう。
    data: {
      text: text,
      createdAt: createdAt,
    },
  });
  alert("保存されました");
};

// 読み込み処理 keyに対応するデータをすべて取得
export const loadAll = async () => {
  const births = await storage.getAllDataForKey<B_Plan>(key);
  return births;
};

// 削除処理 keyに対応するデータの中からidのデータを削除
export const removeBplanInfoAsync = async (bPlan: B_Plan) => {
  await storage.remove({
    key: key,
    id: `${bPlan.createdAt}`,
  });
};
