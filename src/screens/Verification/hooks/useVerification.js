import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Keyboard } from 'react-native';

const useVerification = () => {
  const [otp, setOtp] = useState('');
  const route = useRoute();
  const mobileNumberOrEmail = route.params?.mobileNumberOrEmail ?? '';

  const submit = (values) => {
    Keyboard.dismiss();
    setOtp(values?.otp);
  };

  const getter = {
    otp,
    mobileNumberOrEmail,
  };

  const setter = {
    setOtp,
    submit,
  };

  return {
    getter,
    setter,
  };
};

export default useVerification;
