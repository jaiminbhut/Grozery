import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  horizontalScale,
  Metrics,
  Typography,
} from '../../styles';

const styles = StyleSheet.create({
  ...ApplicationStyles.form,
  container: {
    flex: 1,
  },
  titleView: {
    marginTop: Metrics.navBarHeight,
    ...Typography._24Medium,
    marginHorizontal: horizontalScale(20),
  },
  buttonView: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    left: horizontalScale(25),
    justifyContent: 'space-between',
    bottom: Metrics.bottomTabHeight,
    right: horizontalScale(25),
  },
  resendOtpText: {
    ...Typography._14Regular,
    color: Colors.green,
  },
});

export default styles;
