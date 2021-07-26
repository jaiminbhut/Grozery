import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  horizontalScale,
  Typography,
  verticalScale,
} from '../../styles';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  title: {
    ...Typography._16Regular,
    color: Colors.darkGray,
    marginTop: verticalScale(20),
  },
  textInput: {
    color: Colors.black,
    ...Typography._16Regular,
    paddingEnd: horizontalScale(50),
  },
});

export default styles;
