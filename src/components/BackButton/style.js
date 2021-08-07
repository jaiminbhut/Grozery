import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, verticalScale } from '../../styles';

const styles = StyleSheet.create({
  container: {
    padding: verticalScale(25),
    alignSelf: 'baseline',
  },
  backIcon: {
    width: horizontalScale(10),
    height: verticalScale(18),
    resizeMode: 'contain',
    tintColor: Colors.black,
    transform: [{ rotate: '180deg' }],
  },
});

export default styles;
