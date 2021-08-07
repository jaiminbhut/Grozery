import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  horizontalScale,
  Metrics,
  Typography,
  verticalScale,
} from '../../styles';

const styles = StyleSheet.create({
  ...ApplicationStyles.form,
  container: {
    flex: 1,
  },
  titleView: {
    marginTop: verticalScale(20),
    ...Typography._24Medium,
    marginHorizontal: horizontalScale(20),
  },
  buttonView: {
    position: 'absolute',
    bottom: Metrics.bottomTabHeight,
    right: horizontalScale(25),
  },
});

export default styles;
