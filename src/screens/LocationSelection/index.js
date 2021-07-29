import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Images } from '../../assets';
import { BackButton } from '../../components';
import strings from '../../lang/strings';
import styles from './style';

const LocationImageView = () => {
  return <Image source={Images.location} style={styles.location} />;
};

const TitleView = () => {
  return (
    <>
      <Text style={styles.titleView}>{strings.selectYourLocation}</Text>
      <Text style={styles.descriptionText}>
        {strings.selectLocationForGetUpdatesOfNearestStore}
      </Text>
    </>
  );
};

const LocationSelectionScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <BackButton />
      <LocationImageView />
      <TitleView />
    </View>
  );
};

export default LocationSelectionScreen;
