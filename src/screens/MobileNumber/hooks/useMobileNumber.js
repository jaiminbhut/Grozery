import { useState } from 'react';
import { Keyboard } from 'react-native';

const useMobileNumber = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const submit = (values) => {
    Keyboard.dismiss();
    setMobileNumber(values?.mobileNumber);
  };

  const getter = {
    mobileNumber,
  };

  const setter = {
    setMobileNumber,
    submit,
  };

  return {
    getter,
    setter,
  };
};

export default useMobileNumber;
