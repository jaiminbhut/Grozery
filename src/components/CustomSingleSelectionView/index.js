import { ChevronDownIcon, FormControl, Input } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { Colors, Typography } from '../../styles';
import styles from './style';

const CustomSingleSelectionView = ({
  style,
  error,
  title = '',
  onRowAction,
  ...otherProps
}) => {
  return (
    <Pressable onPress={onRowAction}>
      <FormControl isRequired isInvalid={error}>
        <Text style={[styles.title, otherProps.titleStyle]}>{title}</Text>
        <Input
          variant="underlined"
          paddingLeft={0}
          editable={false}
          style={[styles.textInput, style]}
          _light={{
            placeholderTextColor: Colors.lightBlack,
          }}
          _focus={{ borderColor: Colors.green }}
          InputRightElement={<ChevronDownIcon />}
          onPressIn={onRowAction}
          {...Typography._16Regular}
          {...otherProps}
        />
        <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
      </FormControl>
    </Pressable>
  );
};

CustomSingleSelectionView.propTypes = {
  item: PropTypes.object,
  onRowAction: PropTypes.func,
  style: PropTypes.object,
  error: PropTypes.string,
  title: PropTypes.string,
};

export default CustomSingleSelectionView;
