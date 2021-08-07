import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  Typography,
  verticalScale,
} from '../../../styles';

const styles = StyleSheet.create({
  drawerItemsContainer: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(20),
    marginHorizontal: horizontalScale(30),
    paddingHorizontal: horizontalScale(5),
    borderBottomColor: Colors.darkGray,
  },
  drawerItemsStyles: {
    marginHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowRight: {
    height: verticalScale(10),
    width: undefined,
    aspectRatio: 1.2,
    resizeMode: 'contain',
    tintColor: Colors.green,
  },
  itemText: {
    ...Typography._14Regular,
  },
});

export default styles;
