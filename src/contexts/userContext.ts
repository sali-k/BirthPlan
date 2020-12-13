import { createContext } from "react";
// import { User } from "../@types/user";
import firebase from "firebase";

// type UserContextValue = {
//   user: User | null;
//   setUser: (user: User | null) => void;
// };

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
