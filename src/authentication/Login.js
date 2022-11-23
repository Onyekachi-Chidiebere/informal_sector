import React from 'react';
import {View, Text, ScrollView, Pressable, Image} from 'react-native';
import logo from '../images/logo.png';
import styles from './OnboardingScreenScreenStyle';
import Input from '../components/input/Input';
import useLogin from './useLogin';
import CustomAlert from '../components/alert/CustomAlert';

const Login = ({navigation}) => {
  const {handleChange, userData, loading, loginUser, alert} = useLogin();
  return (
    <View style={styles.background}>
      {alert && <CustomAlert alert={alert} />}

      <ScrollView>
        <Pressable  style={styles.backBtn}>
        </Pressable>
        {/* <Logo style={styles.logo} /> */}
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>Login to your Account</Text>
        <View style={styles.input}>
          <Input
            label="Phone Number"
            handleChange={handleChange}
            name="phone"
            value={userData.phone}
            placeholder={'Phone Number'}
          />
        </View>
        <View style={styles.input}>
          <Input
            label="Password"
            handleChange={handleChange}
            value={userData.password}
            name="password"
            placeholder={'Password'}
            secureTextEntry={true}
          />
        </View>
        {/* <Pressable onPress={()=>navigation.navigate('home')} style={styles.btn}> */}
        <Pressable onPress={loginUser} style={styles.btn}>
          <Text style={styles.btnTxt}>
            {loading ? 'Loading...' : 'Sign in'}
          </Text>
        </Pressable>
        <View style={{padding: 20}}>
          <Pressable
            onPress={() => navigation.navigate('verify-phone')}
            style={{alignItems: 'flex-end'}}>
            <Text>Forgot Password?</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
