declare module "*.jpg";

type signedInUser = {
  email: string;
  uid: string;
};

type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Edit: { user: signedInUser; bPlan: B_Plan };
  AppNavigator: { user: signedInUser };
  BirthPlan: undifined;
  Postpartum: undifined;
  LaborPain: undifined;
  Delivery: undifined;
};

type AppNavigatorParamList = {
  Home: { user: signedInUser };
  Chat: { user: signedInUser };
  User: { user: signedInUser };
  Help: { user: signedInUser };
};

type ChatParamList = {
  Chat: { user: signedInUser };
};

type Message = {
  text: string;
  createdAt: firebase.firestore.Timestamp;
  userId: string;
};

interface B_Plan {
  text: string;
  createdAt: number;
}

type User = {
  id: string;
  name: string;
  updatedAt?: firebase.firestore.Timestamp;
  createdAt?: firebase.firestore.Timestamp;
};

const initialUser: User = {
  name: "",
  updatedAt: firebase.firestore.Timestamp.now(),
  createdAt: firebase.firestore.Timestamp.now(),
};

type UserContextValue = {
  user: User;
  setUser: (user: User) => void;
};
