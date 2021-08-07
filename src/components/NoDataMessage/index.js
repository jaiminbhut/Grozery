import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const NoDataMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

NoDataMessage.propTypes = {
  message: PropTypes.string,
};

export default NoDataMessage;
