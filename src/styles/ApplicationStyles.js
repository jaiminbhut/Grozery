// This file is for a reusable grouping of Theme items.

import Colors from './Colors';

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
  form: {},
};

export default ApplicationStyles;
