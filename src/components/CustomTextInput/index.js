import { FormControl, Input } from 'native-base';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { Text } from 'react-native';
import { Colors, Typography } from '../../styles';
import styles from './style';

const CustomTextInput = (
  {
    style,
    error,
    placeholderTextColor = Colors.black,
    blurOnSubmit = false,
    returnKeyType = 'next',
    visibleView,
    title = '',
    secureTextEntry,
    ...otherProps
  },
  ref,
) => {
  return (
    <FormControl isRequired isInvalid={error}>
      <Text style={[styles.title, otherProps.titleStyle]}>{title}</Text>
      <Input
        ref={ref}
        variant="underlined"
        paddingLeft={0}
        style={[styles.textInput, style]}
        placeholderTextColor={placeholderTextColor}
        blurOnSubmit={blurOnSubmit}
        returnKeyType={returnKeyType}
        _light={{
          placeholderTextColor: Colors.lightBlack,
        }}
        _focus={{ borderColor: Colors.green }}
        {...Typography._16Regular}
        {...otherProps}
      />
      <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default forwardRef(CustomTextInput);

CustomTextInput.propTypes = {
  style: PropTypes.object,
  error: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  blurOnSubmit: PropTypes.bool,
  returnKeyType: PropTypes.string,
  title: PropTypes.string,
  visibleView: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};
