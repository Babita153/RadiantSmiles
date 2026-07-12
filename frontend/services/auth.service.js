import auth from "@react-native-firebase/auth";

export const signupUser = async (
  name,
  email,
  password
) => {

  const userCredential =
    await auth().createUserWithEmailAndPassword(
      email,
      password
    );

  await userCredential.user.updateProfile({
    displayName: name,
  });

  return userCredential.user;
};

export const loginUser = async (
  email,
  password
) => {

  const userCredential =
    await auth().signInWithEmailAndPassword(
      email,
      password
    );

  return userCredential.user;
};

export const logoutUser = async () => {
  await auth().signOut();
};

export const getCurrentUser = () => {
  return auth().currentUser;
};

export const getIdToken = async () => {
  return await auth().currentUser.getIdToken();
};