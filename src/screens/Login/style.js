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
  topImage: {
    width: Metrics.screenWidth * 1.3,
    height: Metrics.screenHeight / 2.5,
    resizeMode: 'contain',
    transform: [{ rotate: '245deg' }],
  },
  titleText: {
    ...Typography._26Medium,
    paddingTop: verticalScale(30),
    paddingHorizontal: horizontalScale(25),
  },
  facebookContainer: {
    backgroundColor: Colors.darkBlue,
    marginHorizontal: horizontalScale(25),
    marginTop: verticalScale(10),
  },
  mobileContainer: {
    backgroundColor: Colors.orange,
    marginHorizontal: horizontalScale(25),
    marginTop: verticalScale(30),
  },
  googleContainer: {
    backgroundColor: Colors.blue,
    marginHorizontal: horizontalScale(25),
  },
  buttonText: {
    ...Typography._18SemiBold,
    color: Colors.white,
  },
  continueWithSocialText: {
    alignSelf: 'center',
    paddingVertical: verticalScale(15),
    textDecorationLine: 'underline',
    ...Typography._14Regular,
    color: Colors.lightBlack,
  },
});

export default styles;
