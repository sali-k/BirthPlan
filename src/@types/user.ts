import firebase from "firebase";

export type User = {
  id?: string;
  name: string;
  updatedAt?: firebase.firestore.Timestamp;
  createdAt?: firebase.firestore.Timestamp;
};
