import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import Color from 'color';
import { Toast } from 'native-base';
import { ErrorConsts } from '../constants';
import { navigate, reset } from '../navigation/NavigationRef';
import NavigationRoutes from '../navigation/NavigationRoutes';
import { Colors } from '../styles';

export function isNull(data) {
  if (data === '' || data === 'null' || data === null || data === undefined) {
    return true;
  } else {
    false;
  }
}

export function checkNetwork() {
  NetInfo.fetch().then((state) => {
    if (state.isConnected) {
      return true;
    } else {
      showToast(ErrorConsts.networkError);

      return false;
    }
  });
}

export const showToast = (message) => {
  Toast.show({
    text: `${message}`,
    textStyle: {
      color: Colors.black,
    },
    style: { backgroundColor: Colors.white },
    duration: 2000,
  });
};

export const logout = () => {
  AsyncStorage.clear();
  reset(NavigationRoutes.Login);
};

export function objToQueryString(obj) {
  const keyValuePairs = [];

  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]),
    );
  }

  return keyValuePairs.join('&');
}

export const jsonParser = (data) => {
  let parseData = data;

  try {
    parseData = JSON.parse(data);
  } catch (e) {
    () => {};
  }

  return parseData;
};

export const navigateAfterTimeout = (screen) => {
  setTimeout(() => {
    navigate(screen);
  }, 350);
};

export const colorGenerator = (color, alpha = 1) => {
  return Color(color).alpha(alpha).rgb().string();
};
