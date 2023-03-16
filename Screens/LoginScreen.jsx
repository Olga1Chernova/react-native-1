import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ImageBackground,
  Button,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Image,
  Keyboard,
  Platform,
  Alert
} from "react-native";
import React, { useState } from "react";


function LoginScreen() {
    const [value, setValue] = useState("");
    const inputHandler = (text) => setValue(text);
    const onLogin = () => {
      Alert.alert("Credentials");
    };
    const signInText = "Already have an account? Sign in";
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //   <View style={styles.container}>
    //     <KeyboardAvoidingView
    //       behavior={Platform.OS == "ios" ? "padding" : "height"}
    //     >
    //       <ImageBackground
    //         source={require("../assets/img/background-img.png")}
    //         style={styles.image}
    //       ></ImageBackground>
    //       <Image style={styles.profile} />
    //       <Text style={styles.sign_in} />
    //       <TextInput
    //         placeholder="Enter your login"
    //         value={value}
    //         onChangeText={inputHandler}
    //       />
    //       <TextInput
    //         placeholder="Enter your e-mail"
    //         value={value}
    //         onChangeText={inputHandler}
    //       />
    //       <TextInput
    //         placeholder="Enter your password"
    //         value={value}
    //         onChangeText={inputHandler}
    //       />
    //       <Button title={"Sign up"} style={styles.button} onPress={onLogin} />
    //       <Text style={styles.sign_in}>{signInText}</Text>
    //     </KeyboardAvoidingView>
    //   </View>
    // </TouchableWithoutFeedback>
    <></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  // profile: {
  //   flex: 1,
  //   justifyContent: "center",
    
  // },
  // input: {
    
  //   height: 50,
  //   padding: 10,
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   borderColor: "#E8E8E8",
  //   marginBottom: 16,
  // },
  // button: {
    
  //   backgroundColor: "#000000",
  //   color: "#FFFFFF",
  // },
  // sign_in: {
  //   marginTop: 16,
  // },
});

export default LoginScreen;
