import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { BackButton, CustomTextInput, NextButton } from '../../components';
import strings from '../../lang/strings';
import schema from '../../services/ValidationService';
import useVerification from './hooks/useVerification';
import styles from './style';

const inputRef = {
  otp: createRef(),
};

const TitleView = ({ mobileNumberOrEmail }) => {
  return (
    <>
      <Text style={styles.titleView}>
        {strings.enter4DigitOtpSendTo + ': ' + mobileNumberOrEmail}
      </Text>
    </>
  );
};

const OTPInputView = ({
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  handleSubmit,
}) => (
  <CustomTextInput
    ref={inputRef.otp}
    style={styles.textInput}
    title={strings.otp}
    titleStyle={styles.textInputTitle}
    value={values.otp}
    placeholder={strings.otpPlaceHolder}
    maxLength={4}
    returnKeyType={'done'}
    keyboardType="number-pad"
    error={touched.otp && errors.otp}
    onBlur={handleBlur('otp')}
    onChangeText={handleChange('otp')}
    onSubmitEditing={handleSubmit}
  />
);

const RenderForm = ({ otp, submit }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        otp: otp,
      }}
      validationSchema={schema.verification}
      onSubmit={(values) => submit(values)}>
      {({ ...params }) => RenderFormInputs(params)}
    </Formik>
  );
};

const RenderFormInputs = (params) => (
  <View style={styles.formInputs}>
    <OTPInputView {...params} />
  </View>
);

const ResendOtpView = () => {
  return <Text style={styles.resendOtpText}>{strings.resendOtp}</Text>;
};

const NextButtonView = ({ otp }) => {
  return (
    <View style={styles.buttonView}>
      <ResendOtpView />
      <NextButton onPress={() => handleNextButtonAction(otp)} />
    </View>
  );
};

const handleNextButtonAction = (otp) => {
  //TODO
};

const VerificationScreen = () => {
  const { getter, setter } = useVerification();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <BackButton />
      <TitleView {...getter} />
      <RenderForm {...getter} {...setter} />
      <NextButtonView {...getter} />
    </View>
  );
};

TitleView.propTypes = {
  mobileNumberOrEmail: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
OTPInputView.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  values: PropTypes.object,
  handleSubmit: PropTypes.func,
};
RenderForm.propTypes = {
  otp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  submit: PropTypes.func,
};
NextButtonView.propTypes = {
  otp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default VerificationScreen;
