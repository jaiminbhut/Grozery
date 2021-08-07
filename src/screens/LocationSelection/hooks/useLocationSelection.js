import { useEffect, useState } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { EventConsts, Keys } from '../../../constants';

const useLocationSelection = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');

  useEffect(() => {
    DeviceEventEmitter.addListener(EventConsts.selection, (selection) => {
      if (selection?.[Keys.locationSelection.state]) {
        setState(selection?.[Keys.locationSelection.state]);
      } else if (selection?.[Keys.locationSelection.city]) {
        setCity(selection?.[Keys.locationSelection.city]);
      } else if (selection?.[Keys.locationSelection.area]) {
        setArea(selection?.[Keys.locationSelection.area]);
      }
    });

    return () => {
      DeviceEventEmitter.removeAllListeners(EventConsts.selection);
    };
  }, []);

  const submit = () => {
    //TODO
  };

  const getter = {
    state,
    city,
    area,
  };

  const setter = {
    setState,
    setCity,
    setArea,
    submit,
  };

  return {
    getter,
    setter,
  };
};

export default useLocationSelection;
