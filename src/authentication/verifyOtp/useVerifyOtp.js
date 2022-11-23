import { useReducer, useState } from 'react';

const useVerifyOtp = () => {
  // const phone_number = useSelector(state => state.user.phone);
  const errors = [];
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useReducer(
    (state, nextState) => ({...state, ...nextState}),
    {
      verification_code: '',
      country_code: '+234',
    },
  );

  const handleChange = (name, value) => setUserData({[name]: value});

  const verifyOtp = async () => {
  
  };

  return {
    userData,
    alert,
    loading,
    handleChange,
    verifyOtp,
  };
};

export default useVerifyOtp;