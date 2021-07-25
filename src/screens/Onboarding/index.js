import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { Icons, Images } from '../../assets';
import CustomButton from '../../components/CustomButton';
import strings from '../../lang/strings';
import { navigate } from '../../navigation/NavigationRef';
import NavigationRoutes from '../../navigation/NavigationRoutes';
import styles from './style';

const WelcomeTitleView = () => {
  return (
    <View style={styles.welcomeTitle}>
      <Image source={Icons.carret} style={styles.carretIcon} />
      <Text style={styles.welcomeText}>{strings.welcomeToOurStore}</Text>
      <Text style={styles.subtitleText}>
        {strings.getYourGroceriesAsFastAsOneHours}
      </Text>
      <GetStartButton />
    </View>
  );
};

const GetStartButton = () => {
  return (
    <CustomButton
      title={strings.getStart}
      containerStyle={styles.buttonStyle}
      onPress={handleGetStartAction}
    />
  );
};

const handleGetStartAction = () => {
  navigate(NavigationRoutes.Login);
};

const OnboardingScreen = () => {
  return (
    <ImageBackground
      source={Images.onboardingBackground}
      style={styles.backgroundImage}>
      <WelcomeTitleView />
    </ImageBackground>
  );
};

export default OnboardingScreen;
