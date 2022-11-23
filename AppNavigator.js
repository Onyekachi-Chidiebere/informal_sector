import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import NetworkChecker from 'react-native-network-checker';
import {LogBox} from 'react-native';
import Login from './src/authentication/Login';
import ResetPassword from './src/authentication/ResetPassword';
import VerifyPhone from './src/authentication/VerifyPhone';
import VerifyOtp from './src/authentication/verifyOtp/VerifyOtp';
import HomeScreen from './src/main/Home';
import {useSelector} from 'react-redux';
//this is to disable deprication waring of react-native-gesture-handler
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const AppNavigator = () => {
  const isLoggedIn = useSelector(state => state.user.jwt);
  const Stack = createStackNavigator();
  return (
    <NetworkChecker
      position="bottom"
      duration={2000}
      notConnectedMessage="Not connected to Internet!"
      notConnectedTextColor="white"
      notConnectedBackgroundColor="red"
      connectedMessage="Connected to Internet!"
      connectedTextColor="white"
      connectedBackgroundColor="green">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="verify-phone"
            component={VerifyPhone}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="verify-phone-otp"
            component={VerifyOtp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="reset-password"
            component={ResetPassword}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NetworkChecker>
  );
};
export default AppNavigator;
