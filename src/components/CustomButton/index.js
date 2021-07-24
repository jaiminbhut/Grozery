import PropTypes from 'prop-types';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './style';

const IconView = ({ icon }) => {
  return <Image source={icon} style={styles.icon} />;
};

const CustomButton = ({ title, icon, onPress, containerStyle }) => {
  return (
    <Pressable
      style={[styles.buttonContainer, containerStyle]}
      onPress={onPress}>
      {icon && <IconView icon={icon} />}
      <Text style={styles.buttonText}>{title}</Text>
      {icon && <View style={styles.extraSpace} />}
    </Pressable>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.number,
  onPress: PropTypes.func,
  containerStyle: PropTypes.object,
};
IconView.propTypes = {
  icon: PropTypes.number,
};
