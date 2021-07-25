import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  horizontalScale,
  Metrics,
  Typography,
  verticalScale,
} from '../../styles';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  welcomeTitle: {
    position: 'absolute',
    bottom: 0,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight / 2,
  },
  welcomeText: {
    ...Typography._38SemiBold,
    color: Colors.white,
    lineHeight: verticalScale(46),
    textAlign: 'center',
    paddingTop: verticalScale(20),
  },
  carretIcon: {
    alignSelf: 'center',
    height: verticalScale(50),
    width: horizontalScale(40),
    resizeMode: 'contain',
  },
  subtitleText: {
    ...Typography._12Medium,
    color: Colors.gray,
    textAlign: 'center',
    paddingBottom: verticalScale(30),
  },
  buttonStyle: {
    marginHorizontal: horizontalScale(25),
  },
});

export default styles;
