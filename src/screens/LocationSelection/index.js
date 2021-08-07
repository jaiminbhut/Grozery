import PropTypes from 'prop-types';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Images } from '../../assets';
import {
  BackButton,
  CustomButton,
  CustomScrollView,
  CustomSingleSelectionView,
} from '../../components';
import Keys from '../../constants/Keys';
import strings from '../../lang/strings';
import { navigate } from '../../navigation/NavigationRef';
import NavigationRoutes from '../../navigation/NavigationRoutes';
import useLocationSelection from './hooks/useLocationSelection';
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

const handlePickerAction = (value) => {
  const param = value;

  navigate(NavigationRoutes.Search, { searchFor: param });
};

const StateView = ({ state }) => {
  return (
    <View style={styles.stateView}>
      <CustomSingleSelectionView
        title={strings.yourState}
        value={state}
        placeholder={strings.statePlaceHolder}
        onRowAction={() => handlePickerAction(Keys.locationSelection.state)}
      />
    </View>
  );
};

const CityView = ({ city }) => {
  return (
    <View style={styles.stateView}>
      <CustomSingleSelectionView
        title={strings.yourCity}
        value={city}
        placeholder={strings.cityPlaceHolder}
        onRowAction={() => handlePickerAction(Keys.locationSelection.city)}
      />
    </View>
  );
};

const AreaView = ({ area }) => {
  return (
    <View style={styles.stateView}>
      <CustomSingleSelectionView
        title={strings.yourArea}
        value={area}
        placeholder={strings.areaPlaceHolder}
        onRowAction={() => handlePickerAction(Keys.locationSelection.area)}
      />
    </View>
  );
};

const SubmitButton = ({ submit }) => {
  return (
    <CustomButton
      containerStyle={styles.submitButton}
      title={strings.submit}
      onPress={submit}
    />
  );
};

const LocationSelectionScreen = () => {
  const { getter, setter } = useLocationSelection();

  return (
    <CustomScrollView containerStyle={styles.container}>
      <SafeAreaView />
      <BackButton />
      <LocationImageView />
      <TitleView />
      <StateView {...getter} />
      <CityView {...getter} />
      <AreaView {...getter} />
      <SubmitButton {...setter} />
    </CustomScrollView>
  );
};

export default LocationSelectionScreen;

StateView.propTypes = {
  state: PropTypes.string,
};
CityView.propTypes = {
  city: PropTypes.string,
};
AreaView.propTypes = {
  area: PropTypes.string,
};
SubmitButton.propTypes = {
  submit: PropTypes.func,
};
