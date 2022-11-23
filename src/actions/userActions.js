import {LOGIN, LOGOUT, UPDATE_SCANNED} from '../constants/userConstant';

const login = user => async dispatch => {
  try {
    dispatch({type: LOGIN, payload: user});
  } catch (error) {
    console.log(error);
  }
};

const updateScan = scan => async dispatch => {
  try {
    dispatch({type: UPDATE_SCANNED, payload: scan});
  } catch (error) {
    console.log(error);
  }
};

const logout = () => async dispatch => {
  try {
    dispatch({type: LOGOUT});
  } catch (error) {
    console.log(error);
  }
};

export {logout, login, updateScan};
