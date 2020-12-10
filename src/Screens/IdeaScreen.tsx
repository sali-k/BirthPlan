import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

type Idea = {
  name: string;
  timing: string;
};

export function IdeaScreen() {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection("Ideas").get();
    const shops = snapshot.docs.map((doc) => doc.data() as Idea);
    setIdeas(shops);
  };

  const shopItems = ideas.map((idea, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{idea.timing}</Text>
      <Text>{idea.name}</Text>
    </View>
  ));

  return <View style={styles.container}>{shopItems}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
