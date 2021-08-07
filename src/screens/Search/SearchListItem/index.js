import PropTypes from 'prop-types';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Icons } from '../../../assets';
import styles from './style';

const SearchListItem = ({ row, onRowAction }) => {
  return (
    <Pressable
      style={styles.drawerItemsContainer}
      onPress={() => onRowAction()}>
      <View style={[styles.drawerItemsStyles]}>
        <Text style={[styles.itemText]}>{row.title}</Text>
      </View>
      {row.isSelected && (
        <Image style={[styles.arrowRight]} source={Icons.check} />
      )}
    </Pressable>
  );
};

SearchListItem.propTypes = {
  row: PropTypes.object,
  onRowAction: PropTypes.func,
};

export default SearchListItem;
