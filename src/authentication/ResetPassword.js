import React from 'react';
import { View,Text, ScrollView, Pressable, Image } from 'react-native';
import logo from '../images/logo.png';
import styles from './OnboardingScreenScreenStyle';
import Input from '../components/input/Input';
import useLogin from './useLogin';
import CustomAlert from '../components/alert/CustomAlert';
import arrow from '../images/arrBack.png';

const ResetPassword = ({navigation}) => {
  const {handleChange, userData, loading, loginUser, alert} = useLogin();
  return (
    <View style={styles.background}>
      {alert && <CustomAlert alert={alert} />}

      <ScrollView>
        <Pressable onPress={() => navigation.pop()} style={styles.backBtn}>
        <Image  source={arrow}/>
        </Pressable>
        <Image style={styles.logo}  source={logo}/>
        <Text style={styles.title}>Reset your password</Text>
        <View style={styles.input}>
          <Input
            label="Password"
            handleChange={handleChange}
            name="phone"
            secureTextEntry={true}
            value={userData.password}
            placeholder={'Password'}
          />
        </View>
        <View style={styles.input}>
          <Input
            label="Confirm Password"
            handleChange={handleChange}
            value={userData.password}
            name="password"
            placeholder={'Password'}
            secureTextEntry={true}
          />
        </View>
        <Pressable onPress={loginUser} style={styles.btn}>
          <Text style={styles.btnTxt}>
            {loading ? 'Loading...' : 'Reset'}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default ResetPassword;