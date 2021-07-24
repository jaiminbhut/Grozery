import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  Typography,
  verticalScale,
} from '../../styles';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    borderRadius: moderateScale(12),
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    flex: 1,
    ...Typography._16SemiBold,
    color: Colors.white,
    paddingVertical: verticalScale(12),
    textAlign: 'center',
  },
  icon: {
    flex: 0.2,
    height: verticalScale(20),
    width: horizontalScale(20),
    marginStart: horizontalScale(10),
    resizeMode: 'contain',
  },
  extraSpace: {
    height: verticalScale(20),
    width: horizontalScale(20),
    marginStart: horizontalScale(10),
  },
});

export default styles;
