import axios from 'axios';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateScan} from '../actions/userActions';
import {API_URL} from '../constants/helper';

const useHome = () => {
  const errors = [];
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [scannedUser, setScannedUser] = useState(null);
  const scan = async ({asset_id}) => {
    try {
      console.log({asset_id});
      setLoading(true);
      const response = await axios.post(`${API_URL}/scan`, {
        asset_id,
        id: user.id,
        phone: user.phone,
        longitude: '1234567',
        latitude: '1234567',
      });
      setLoading(false);
      // console.log({response: response.data.message.data.expiryData});
      const {code, message} = response.data;
      console.log({code, message});
      if (code === '00') {
        //ensure you update this scan;
        const {
          newScan,
          user,
          balance,
          expiryData,
          item,
          category,
          driver,
          subItem,
        } = message.data;
        dispatch(updateScan(newScan));
        return setScannedUser({
          ...user,
          ...expiryData,
          balance: balance.balance,
          asin: balance.asin,
          text: message.text,
          item,
          category,
          driver,
          subItem,
        });
      }
      if (code === '01') {
        const {user, balance, expiryData, item, category, driver, subItem} =
          message.data;
        return setScannedUser({
          ...user,
          ...expiryData,
          balance: balance.balance,
          asin: balance.asin,
          text: message.text,
          item,
          category,
          driver,
          subItem,
        });
      }
      if (code === '02') {
        const {user, balance, expiryData, item, category, driver, subItem} =
          message.data;
        return setScannedUser({
          ...user,
          ...expiryData,
          balance: balance.balance,
          asin: balance.asin,
          text: message.text,
          item,
          category,
          driver,
          subItem,
        });
      }
      if (code === '10') {
        const { user, balance, item, category, driver, subItem } = message.data;
        return setScannedUser({
          ...user,
          balance: balance.balance,
          asin: balance.asin,
          text: message.text,
          item,
          category,
          driver,
          subItem,
        });
      }
      if (code === 'E400') {
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: [`${message}`],
        });
      }
      if (code === 'E401') {
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: [`${message}`],
        });
      }
      return setAlert({
        close: () => setAlert(false),
        title: 'Error',
        icon: 'error',
        confirmText: 'Ok',
        message: [`Unable to scan`],
      });
    } catch (error) {
      console.log({error});
      setLoading(false);
      return setAlert({
        close: () => setAlert(false),
        title: 'Error',
        icon: 'error',
        confirmText: 'Ok',
        message: ['Network error'],
      });
    }
  };
  return {
    loading,
    alert,
    scan,
    scannedUser,
    setScannedUser,
  };
};

export default useHome;
