import React from 'react';
import { Image, Pressable, SafeAreaView } from 'react-native';
import { Icons } from '../../assets';
import { goBack } from '../../navigation/NavigationRef';
import styles from './style';

const BackButton = () => {
  return (
    <Pressable style={styles.container} onPress={goBack}>
      <SafeAreaView />
      <Image source={Icons.arrowRight} style={styles.backIcon} />
    </Pressable>
  );
};

export default BackButton;
