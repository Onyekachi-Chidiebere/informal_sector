import React, {useEffect} from 'react';
import {View, Text, Pressable,Image} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import CustomAlert from '../../components/alert/CustomAlert';
// import Arrow from '../../../images/arrBack.svg';
// import Phone from '../../../images/phone.svg';
import useVerifyOtp from './useVerifyOtp';
import styles from './verifyOtpStyle';
import arrow from '../../images/arrBack.png';
import phone from '../../images/phone.png';

const VerifyOtp = ({navigation}) => {
  const {handleChange, verifyOtp, userData, loading, alert} = useVerifyOtp();
 
  return (
    <View style={styles.background}>
      {alert && <CustomAlert alert={alert} />}
      <Pressable onPress={() => navigation.pop()} style={styles.backBtn}>
        <Image  source={arrow}/>
      </Pressable>
      <View style={styles.phone}>
        <Image  source={phone}/>
      </View>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.info}>We sent a 6 digit password to your phone</Text>
      <View style={styles.inputHolder}>
        <SmoothPinCodeInput
          password
          mask="﹡"
          cellSize={46}
          cellSpacing={10}
          codeLength={6}
          cellStyle={styles.input}
          cellStyleFocused={styles.focusedInput}
          value={userData.verification_code}
          onTextChange={pin => handleChange('verification_code', pin)}
          onFulfill={verifyOtp}
        />
      </View>
      <Pressable style={styles.btn} onPress={()=>navigation.navigate('reset-password')}>
        <Text style={styles.btnTxt}>{loading ? 'Loading...' : 'Verify'}</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.resendBtn}>Resend OTP</Text>
      </Pressable>
    </View>
  );
};

export default VerifyOtp;
