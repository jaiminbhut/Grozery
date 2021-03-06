import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { BackButton, CustomTextInput, NextButton } from '../../components';
import strings from '../../lang/strings';
import { navigate } from '../../navigation/NavigationRef';
import NavigationRoutes from '../../navigation/NavigationRoutes';
import schema from '../../services/ValidationService';
import useMobileNumber from './hooks/useMobileNumber';
import styles from './style';

const inputRef = {
  mobileNumber: createRef(),
};

const TitleView = () => {
  return (
    <>
      <Text style={styles.titleView}>{strings.enterYourMobileNumber}</Text>
    </>
  );
};

const MobileNumberInputView = ({
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  handleSubmit,
}) => (
  <CustomTextInput
    ref={inputRef.mobileNumber}
    style={styles.textInput}
    title={strings.mobileNumber}
    titleStyle={styles.textInputTitle}
    value={values.mobileNumber}
    placeholder={strings.mobileNumberPlaceHolder}
    maxLength={10}
    returnKeyType={'done'}
    keyboardType="number-pad"
    error={touched.mobileNumber && errors.mobileNumber}
    onBlur={handleBlur('mobileNumber')}
    onChangeText={handleChange('mobileNumber')}
    onSubmitEditing={handleSubmit}
  />
);

const RenderForm = ({ mobileNumber, submit }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        mobileNumber: mobileNumber,
      }}
      validationSchema={schema.mobileNumber}
      onSubmit={(values) => submit(values)}>
      {({ ...params }) => RenderFormInputs(params)}
    </Formik>
  );
};

const RenderFormInputs = (params) => (
  <View style={styles.formInputs}>
    <MobileNumberInputView {...params} />
  </View>
);

const NextButtonView = ({ mobileNumber }) => {
  return (
    <View style={styles.buttonView}>
      <NextButton onPress={() => handleNextButtonAction(mobileNumber)} />
    </View>
  );
};

const handleNextButtonAction = (mobileNumber) => {
  navigate(NavigationRoutes.Verification, {
    mobileNumberOrEmail: mobileNumber,
  });
};

const MobileNumberScreen = () => {
  const { getter, setter } = useMobileNumber();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <BackButton />
      <TitleView />
      <RenderForm {...getter} {...setter} />
      <NextButtonView {...getter} />
    </View>
  );
};

MobileNumberInputView.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  values: PropTypes.object,
  handleSubmit: PropTypes.func,
};
RenderForm.propTypes = {
  mobileNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  submit: PropTypes.func,
};
NextButtonView.propTypes = {
  mobileNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MobileNumberScreen;
