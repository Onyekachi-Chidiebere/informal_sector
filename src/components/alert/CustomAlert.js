import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import success from '../../images/success.png';
import error from '../../images/error.png';
import {colors} from '../../appTheme';
const CustomAlert = ({alert}) => {
  const {message, icon, close, confirmText, title} = alert;
  return (
    <Pressable style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.container}>
          {icon === 'success' && (
            <Image source={success} height={120} width={120} />
          )}
          {icon === 'error' && (
            <Image source={error} height={120} width={120} />
          )}
        </View>
        <View style={styles.txtHolder}>
          {message.map((msg, key) => (
            <Text style={styles.text} key={key}>
              {msg}
            </Text>
          ))}
        </View>
        <Pressable
          onPress={close}
          style={
            icon === 'success'
              ? styles.successBtn
              : icon === 'error'
              ? styles.errorBtn
              : styles.questionBtn
          }>
          <Text style={styles.btnTxt}>{confirmText}</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default CustomAlert;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 3,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtHolder: {
    flexDirection: 'column',
  },
  container: {
    width: '90%',
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: 4,
    padding: 20,
  },
  successBtn: {
    borderRadius: 4,
    backgroundColor: '#25AE88',
    marginTop: 20,
  },
  errorBtn: {
    borderRadius: 4,
    backgroundColor: '#D75A4A',
    marginTop: 20,
  },
  questionBtn: {
    borderRadius: 4,
    backgroundColor: '#25B7D3',
    marginTop: 20,
  },
  btnTxt: {
    color: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: colors.black,
    fontSize: 12,
  },
});
