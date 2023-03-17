import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

const {Navigator, Screen} = createStackNavigator();

const AuthStack = () => (
  <Navigator headerShown={false}>
    <Screen name="Registration" component={RegistrationScreen} />
    <Screen name="Login" component={LoginScreen} />
  </Navigator>
);

export default function App() {
  
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

