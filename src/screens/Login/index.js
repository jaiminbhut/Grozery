import React from 'react';
import { Image, Text, View } from 'react-native';
import { Icons, Images } from '../../assets';
import CustomButton from '../../components/CustomButton';
import CustomScrollView from '../../components/CustomScrollView';
import { Keys } from '../../constants';
import strings from '../../lang/strings';
import { navigate } from '../../navigation/NavigationRef';
import NavigationRoutes from '../../navigation/NavigationRoutes';
import styles from './style';

const TopImageView = () => {
  return <Image source={Images.loginBackground} style={styles.topImage} />;
};

const TitleView = () => {
  return (
    <View>
      <Text style={styles.titleText}>{strings.getYourGroceriesWithUs}</Text>
    </View>
  );
};

const ContinueWithMobileView = () => {
  return (
    <CustomButton
      icon={Icons.mobile}
      title={strings.continueWithMobile}
      containerStyle={styles.mobileContainer}
      onPress={() => handleButtonAction(Keys.loginType.mobile)}
    />
  );
};

const ContinueWithSocialView = () => {
  return (
    <>
      <Text style={styles.continueWithSocialText}>
        {strings.orContinueWithSocialMedia}
      </Text>
    </>
  );
};

const ContinueWithGoogleView = () => {
  return (
    <CustomButton
      icon={Icons.google}
      title={strings.continueWithGoogle}
      containerStyle={styles.googleContainer}
      onPress={() => handleButtonAction(Keys.loginType.google)}
    />
  );
};

const ContinueWithFacebookView = () => {
  return (
    <CustomButton
      icon={Icons.facebook}
      title={strings.continueWithFacebook}
      containerStyle={styles.facebookContainer}
      onPress={() => handleButtonAction(Keys.loginType.facebook)}
    />
  );
};

const handleButtonAction = (type) => {
  if (type === Keys.loginType.mobile) {
    navigate(NavigationRoutes.MobileNumber);
  } else if (type === Keys.loginType.google) {
    navigate(NavigationRoutes.Verification, {
      mobileNumberOrEmail: strings.emailPlaceHolder,
    });
  } else if (type === Keys.loginType.facebook) {
    navigate(NavigationRoutes.Verification, {
      mobileNumberOrEmail: strings.emailPlaceHolder,
    });
  }
};

const LoginScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <CustomScrollView>
        <TopImageView />
        <TitleView />
        <ContinueWithMobileView />
        <ContinueWithSocialView />
        <ContinueWithGoogleView />
        <ContinueWithFacebookView />
      </CustomScrollView>
    </View>
  );
};

export default LoginScreen;
