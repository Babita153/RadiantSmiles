import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Image,Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { loginUser, getIdToken } from "../services/auth.service";

const Login = () => {

  const navigation = useNavigation();

  const [eye, setEye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

  if (!email || !password) {
    Alert.alert("Error", "Please enter email and password");
    return;
  }

  try {

    // Firebase Login
    const user = await loginUser(email, password);

    // Firebase Token
    const token = await getIdToken();

    // Send token to backend
    const response = await fetch(
      "http://10.0.2.2:3000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firebaseUID: user.uid,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    Alert.alert("Success", "Login Successful");

    navigation.replace("Tabs");

  } catch (error) {

    console.log(error);

    Alert.alert(
      "Login Failed",
      error.message
    );

  }

};

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>
          Please sign in to your existing account
        </Text>
      </View>

      {/* Form */}
      <View style={styles.card}>
        <View style={styles.form}>

          {/* Email */}
          <Text style={styles.label}>EMAIL</Text>
          <TextInput
            placeholder="example@gmail.com"
            style={styles.input}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          {/* Password */}
          <Text style={styles.label}>PASSWORD</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={!eye}
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity onPress={() => setEye(!eye)}>
              <Image
                style={styles.icon}
                source={
                  eye
                    ? require("../assets/view.png")
                    : require("../assets/hide.png")
                }
              />
            </TouchableOpacity>
          </View>

          {/* Remember / Forgot */}
          <View style={styles.row}>
            <Text>Remember me</Text>
            <Text style={styles.forgot}>Forgot Password</Text>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.btnText}>LOG IN</Text>
          </TouchableOpacity>

          {/* Signup */}
          <View style={styles.signupRow}>
            <Text style={styles.signupText}>
              Don't have an account?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signupButton}> Sign up</Text>
            </TouchableOpacity>
          </View>

          {/* OR */}
          <Text style={styles.or}>OR</Text>

        </View>
      </View>

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: 'row',
    padding: 10,
    gap: 30,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: "10%"
  },

  subtitle: {
    color: "#ddd",
    marginTop: 5
  },

  card: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: 'white',
    padding: 15,
  },

  form: {
    padding: 25
  },

  label: {
    marginTop: 10,
    fontWeight: "bold"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginTop: 5
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 10
  },

  passwordInput: {
    flex: 1,
    padding: 12
  },

  icon: {
    width: 22,
    height: 22
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },

  forgot: {
    color: "#BC49C3"
  },

  button: {
    backgroundColor: "#BC49C3",
    padding: 15,
    borderRadius: 20,
    marginTop: 30
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30
  },

  signupText: {
    fontSize: 15
  },

  signupButton: {
    fontSize: 15,
    color: "blue"
  },

  or: {
    textAlign: "center",
    marginTop: 20
  },

  googleButton: {
    alignSelf: "center",
    marginTop: 20
  },

  googleIcon: {
    width: 50,
    height: 50
  }

});