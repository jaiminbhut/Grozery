import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import { Keyboard, SafeAreaView, Text, View } from 'react-native';
import { BackButton, CustomTextInput, NextButton } from '../../components';
import strings from '../../lang/strings';
import schema from '../../services/ValidationService';
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

const RenderForm = ({ mobileNumber }) => {
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

const submit = (values) => {
  Keyboard.dismiss();
};

const RenderFormInputs = (params) => (
  <View style={styles.formInputs}>
    <MobileNumberInputView {...params} />
  </View>
);

const NextButtonView = () => {
  return (
    <View style={styles.buttonView}>
      <NextButton onPress={handleNextButtonAction} />
    </View>
  );
};

const handleNextButtonAction = () => {
  //TODO
};

const MobileNumberScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <BackButton />
      <TitleView />
      <RenderForm />
      <NextButtonView />
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
  mobileNumber: PropTypes.number,
};

export default MobileNumberScreen;
