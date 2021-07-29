import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  Typography,
  verticalScale,
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  location: {
    width: horizontalScale(225),
    height: undefined,
    aspectRatio: 1.32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: verticalScale(50),
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
});

export default styles;
