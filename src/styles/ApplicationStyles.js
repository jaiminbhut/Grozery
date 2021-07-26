// This file is for a reusable grouping of Theme items.

import Colors from './Colors';
import { horizontalScale, scale, verticalScale } from './Metrics';

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    content: {
      flex: 1,
    },
    centeredContent: {
      flex: 1,
      justifyContent: 'center',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  },
  form: {
    textInput: {
      width: '100%',
      paddingHorizontal: scale(25),
      textAlignVertical: 'center',
      backgroundColor: Colors.white,
    },
    formContainer: {
      alignItems: 'center',
      padding: scale(10),
    },
    formInputs: {
      marginTop: verticalScale(10),
      marginHorizontal: horizontalScale(20),
      alignItems: 'center',
    },
  },
};

export default ApplicationStyles;
