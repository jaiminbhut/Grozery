import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightIcon: {
    width: horizontalScale(10),
    height: verticalScale(18),
    resizeMode: 'contain',
  },
});

export default styles;
