import React from 'react';
import { View,Text, ScrollView, Pressable, Image } from 'react-native';
import logo from '../images/logo.png';
import styles from './OnboardingScreenScreenStyle';
import Input from '../components/input/Input';
import useLogin from './useLogin';
import CustomAlert from '../components/alert/CustomAlert';
import arrow from '../images/arrBack.png';

const VerifyPhone = ({navigation}) => {
  const {handleChange, userData, loading, loginUser, alert} = useLogin();
  return (
    <View style={styles.background}>
      {alert && <CustomAlert alert={alert} />}

      <ScrollView>
        <Pressable onPress={() => navigation.pop()} style={styles.backBtn}>
        <Image  source={arrow}/>
        </Pressable>
        <Image style={styles.logo}  source={logo}/>
        <Text style={styles.title}>Provide your phone number</Text>
        <View style={styles.input}>
          <Input
            label="Phone"
            handleChange={handleChange}
            name="phone"
            value={userData.phone}
            placeholder={'Phone'}
          />
        </View>
        <Pressable onPress={()=>navigation.navigate('verify-phone-otp')} style={styles.btn}>
          <Text style={styles.btnTxt}>
            {loading ? 'Loading...' : 'Next'}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default VerifyPhone;