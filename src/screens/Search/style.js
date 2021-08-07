import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  horizontalScale,
  verticalScale,
} from '../../styles';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.form,
  container: {
    flex: 1,
  },
  titleView: {
    alignItems: 'center',
  },
  titleText: {},
  formInputs: {
    marginHorizontal: horizontalScale(30),
  },
  flatListContainer: {
    paddingBottom: verticalScale(20),
    flexGrow: 1,
  },
  listHeaderComponent: {
    backgroundColor: Colors.white,
  },
});

export default styles;
