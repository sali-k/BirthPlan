type signedInUser = {
  email: string;
  uid: string;
};

type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Home: { user: signedInUser };
  AppNavigator: { user: signedInUser };
  Plan: undifined;
  User: undifined;
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
