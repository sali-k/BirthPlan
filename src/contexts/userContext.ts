import { createContext } from "react";
import firebase from "firebase";

export const initialUser: User = {
  name: "",
  id: "",
  updatedAt: firebase.firestore.Timestamp.now(),
  createdAt: firebase.firestore.Timestamp.now(),
};

export const UserContext = createContext<UserContextValue>({
  user: initialUser,
  setUser: () => {},
});
