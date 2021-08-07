import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView } from 'react-native';
import styles from './style';

const CustomScrollView = ({ children, containerStyle }) => {
  return (
    <ScrollView
      contentContainerStyle={[styles.container, containerStyle]}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

export default CustomScrollView;

CustomScrollView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  containerStyle: PropTypes.object,
};
