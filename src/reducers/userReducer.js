import {LOGIN, LOGOUT, UPDATE_SCANNED} from '../constants/userConstant';

export function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {...action.payload};
    case UPDATE_SCANNED:
      let scanList = state.scanned;
      scanList.push(action.payload);
      return {...state, scanned: scanList};
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
