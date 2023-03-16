import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet, View, ImageBackground,
  TextInput, Text, TouchableOpacity,
  Platform, KeyboardAvoidingView
} from 'react-native';

import LoginScreen from './Screens/LoginScreen';

export default function App() {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
            source={require("./assets/img/background-img.png")}
            style={styles.image}
      >
        <View style={styles.form}>
          <Text style={styles.register}>Registration</Text>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{marginBottom: isKeyboardShown ? 32 : 0}}>
              <TextInput
              placeholder="Enter your login"
              style={styles.input}
              onFocus={()=>setIsKeyboardShown(true)}
            />
            <TextInput
              placeholder="Enter your e-mail"
              style={styles.input}
              onFocus={()=>setIsKeyboardShown(true)}
            />
            <TextInput
              placeholder="Enter your password"
              style={styles.input}
              secureTextEntry={true}
              onFocus={()=>setIsKeyboardShown(true)}
            />
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonTitle}>Sign up</Text>
            </TouchableOpacity>
            <Text style={styles.signInText}>Already have an account? Sign in</Text>
            </View>
            </KeyboardAvoidingView>
          </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    position: "relative",
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    marginHorizontal: 16,
    color: "#212121",

  },
  register: {
    marginBottom: 32,
    marginTop: 92,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: "#212121",
  },
  form: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  button: {
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    borderRadius: 100,
    marginTop: 27,
    marginBottom: 16,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  buttonTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  signInText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  }
});
