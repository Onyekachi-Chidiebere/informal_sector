'use strict';

import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Image,
  ActivityIndicator,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {colors} from '../appTheme';
import qr from '../images/qrcode.png';
import logout from '../images/logout.png';
import user from '../images/user.png';
import ScannedPopup from './ScannedPopup';
import {useSelector} from 'react-redux';
import useHome from './useHome';
import CustomAlert from '../components/alert/CustomAlert';
//vehicle, type, number, name, surname,
const HomeScreen = ({navigation}) => {
  const userData = useSelector(state => state.user);
  const [showScan, setShowScan] = useState(false);
  // const [result, setResult] = useState(false);
  const onSuccess = e => {
    scan({asset_id: e.data});
    setShowScan(false);
  };
  const number = 5;

  const {scan, scannedUser, setScannedUser, alert, loading} = useHome();
  if (showScan)
    return (
      <QRCodeScanner
        onRead={onSuccess}
        bottomContent={
          <TouchableOpacity
            onPress={() => setShowScan(false)}
            style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        }
      />
    );
  return (
    <View style={{flex: 1}}>
      {alert && <CustomAlert alert={alert} />}
      {loading && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{backgroundColor: 'white', borderRadius: 10}}>
            <ActivityIndicator size={'large'} />
          </View>
        </View>
      )}
      {scannedUser && (
        <ScannedPopup setScannedUser={setScannedUser} data={scannedUser} />
      )}
      <Pressable
        onPress={() => navigation.navigate('login')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: 20,
        }}>
        <Text style={{color:'black'}}>Logout</Text>
        <Image style={{width: 20, height: 20, margin: 10}} source={logout} />
      </Pressable>
      <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            backgroundColor: '#caf0f8',
            marginBottom: 40,
            borderRadius: 10,
            alignItems: 'flex-end',
          }}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: 'center',
              margin: 10,
            }}
            source={user}
          />
          <Text
            style={{
              width: '90%',
              alignSelf: 'center',
              color: 'black',
            }}>
            {`${userData.surname} ${userData.firstname}`}
          </Text>
        </View>
        <View style={{width: '90%'}}>
          <Pressable
            style={{
              backgroundColor: '#023047',
              padding: 20,
              borderRadius: 10,
              marginBottom: 30,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>April</Text>
          </Pressable>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Pressable
              style={{
                width: '45%',
                backgroundColor: '#8ecae6',
                padding: 20,
                borderRadius: 10,
              }}>
              <Text style={{fontWeight: '300', color: 'black'}}>Count</Text>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                {userData.scanned.length}
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: '45%',
                backgroundColor: '#fb8500',
                padding: 20,
                borderRadius: 10,
              }}>
              <Text style={{fontWeight: '300', color: 'white'}}>Amount</Text>
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                {`NGN ${(userData.scanned.length * number)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{flex: 3}}>
        <View
          style={{
            flex: 1,
            borderRadius: 20,
            backgroundColor: '#caf0f8',
            margin: 10,
            justifyContent: 'flex-end',
          }}>
          <Image
            style={{width: 70, height: 70, alignSelf: 'center', margin: 10}}
            source={qr}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
              margin: 10,
            }}>
            QR Code
          </Text>
          <Pressable
            style={{
              backgroundColor: colors.primary,
              width: '100%',
              borderRadius: 50,
              padding: 20,
            }}
            onPress={() => setShowScan(true)}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              Scan Now
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default HomeScreen;
