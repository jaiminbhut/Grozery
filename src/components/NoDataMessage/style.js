import { StyleSheet } from 'react-native';
import { Colors, Typography } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.black,
    ...Typography._16SemiBold,
  },
});

export default styles;
