import { Button } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { Icons } from '../../assets';
import { Colors } from '../../styles';
import styles from './style';

const NextButton = ({ onPress }) => {
  return (
    <Button
      rounded={65}
      size={65}
      variant={'solid'}
      style={styles.button}
      backgroundColor={Colors.green}
      onPress={onPress}>
      <Image source={Icons.arrowRight} style={styles.rightIcon} />
    </Button>
  );
};

export default NextButton;

NextButton.propTypes = {
  onPress: PropTypes.func,
};
