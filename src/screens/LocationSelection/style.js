import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  Typography,
  verticalScale,
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  location: {
    width: horizontalScale(225),
    height: undefined,
    aspectRatio: 1.32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  titleView: {
    marginTop: verticalScale(20),
    ...Typography._24Medium,
    marginHorizontal: horizontalScale(20),
    alignSelf: 'center',
  },
  descriptionText: {
    textAlign: 'center',
    marginTop: verticalScale(10),
    ...Typography._16Regular,
    color: Colors.darkGray,
    marginHorizontal: horizontalScale(40),
    alignSelf: 'center',
  },
  stateView: {
    marginHorizontal: horizontalScale(30),
    marginTop: verticalScale(10),
  },
  submitButton: {
    marginTop: verticalScale(40),
    marginHorizontal: horizontalScale(30),
  },
});

export default styles;
