import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import close from '../images/close.png';
import user from '../images/user.png';

const ScannedPopup = ({setScannedUser, data}) => {
  console.log({data});
  // const sectorTypeHeater={
  //   Transport:'Plate Number',
  //   Commerce:'Shop Number',
  //   Transport:'Plate Number',
  //   Transport:'Plate Number',
  // }
  //add vehicle numbers to popup
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{backgroundColor: 'white', width: '90%', borderRadius: 10}}>
        {data.driver && (
          <Text
            style={{
              marginHorizontal: 20,
              marginTop: 20,
              alignSelf: 'center',
              fontSize: 28,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Driver's Information
          </Text>
        )}
        {!data.driver && data.status == 0 && (
          <View style={{width: '100%'}}>
            <Text
              style={{
                marginHorizontal: 20,
                marginTop: 20,
                alignSelf: 'center',
                fontSize: 32,
                color: 'red',
                fontWeight: 'bold',
              }}>
              Expired on
            </Text>
            <Text
              style={{
                marginHorizontal: 20,
                marginBottom: 10,
                alignSelf: 'center',
                fontSize: 32,
                color: 'red',
                fontWeight: 'bold',
              }}>
              {data.end_date}
            </Text>
          </View>
        )}

        {!data.driver && data.status == 1 && (
          <View style={{width: '100%'}}>
            <Text
              style={{
                color: 'black',
                fontSize: 32,
                marginHorizontal: 20,
                marginTop: 20,
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              Expiry Date
            </Text>
            <Text
              style={{
                color: 'black',
                alignSelf: 'center',
                fontSize: 32,
                marginHorizontal: 20,
                fontWeight: 'bold',
              }}>
              {data.end_date}
            </Text>
          </View>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              alignSelf: 'center',
              //   margin: 10,
            }}
            source={
              data.driver
                ? {uri: 'data:image/jpeg;base64,' + data.driver.photo}
                : user
            }
            // source={user}
          />

          <Pressable onPress={() => setScannedUser(false)}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                backgroundColor: 'red',
              }}
              source={close}
            />
          </Pressable>
        </View>

        {data.driver && (
          <Text
            style={{
              // borderBottomWidth: 1,
              borderColor: 'grey',
              width: '90%',
              alignSelf: 'center',
              color: 'black',
              fontSize: 15,
            }}>
           ID: {data.driver.nin}
          </Text>
        )}
        <Text
          style={{
            borderBottomWidth: 1,
            borderColor: 'grey',
            width: '90%',
            alignSelf: 'center',
            color: 'black',
            fontSize: 15,
            marginBottom:10
          }}>
          {data.names}
        </Text>
        {data.driver && (
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{width: '50%'}}>
                <Text style={{color: 'black', fontWeight: '300'}}>City</Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 17,
                  }}>
                  {data.driver.driver_town}
                </Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={{color: 'black', fontWeight: '300'}}>LGA</Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 17,
                  }}>
                  {data.driver.driver_lga}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{width: '100%'}}>
                <Text style={{color: 'black', fontWeight: '300'}}>Address</Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 17,
                  }}>
                  {data.driver.address}
                </Text>
              </View>
            </View>
            {data.driver && (
              <Text
                style={{
                  marginHorizontal: 20,
                  marginTop: 20,
                  alignSelf: 'center',
                  fontSize: 28,
                  color: 'black',
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center',
                  marginBottom: 10,
                  borderTopWidth: 1,
                  borderTopColor: 'grey',
                }}>
                Asset Driving
              </Text>
            )}
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            // marginVertical: 20,
          }}>
          <Pressable
            style={{
              width: '45%',
              backgroundColor: '#8ecae6',
              padding: 20,
              borderRadius: 10,
            }}>
            <Text style={{fontWeight: '300', color: 'black'}}>Sector Type</Text>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              {data.item.item_name}
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: '45%',
              backgroundColor: '#fb8500',
              padding: 20,
              borderRadius: 10,
            }}>
            <Text style={{fontWeight: '300', color: 'white'}}>
              {data.item.assets_name}
            </Text>
            <Text style={{fontWeight: 'bold', color: 'white'}}>
              {data.plate_number}
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View style={{width: '50%'}}>
            <Text style={{color: 'black', fontWeight: '300'}}>
              Operating City
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 17,
              }}>
              {data.operating_city}
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Text style={{color: 'black', fontWeight: '300'}}>
              Operating LGA
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 17,
              }}>
              {data.operating_lga}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View style={{width: '100%'}}>
            <Text style={{color: 'black', fontWeight: '300'}}>Route</Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 17,
              }}>
              {data.subItem.subitem_name}
            </Text>
          </View>
        </View>

        <Text
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            fontSize: 20,
            color: 'black',
          }}>
          {data.text}
        </Text>
      </View>
    </View>
  );
};

export default ScannedPopup;
