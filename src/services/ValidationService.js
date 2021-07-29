import * as Yup from 'yup';
import strings from '../lang/strings';

const schema = {
  mobileNumber: Yup.object({
    mobileNumber: Yup.string()
      .required(strings.emptyMobileNumber)
      .min(10, strings.mobileNumberMustBe10Characters),
  }),
  verification: Yup.object({
    otp: Yup.string()
      .required(strings.emptyOtp)
      .min(4, strings.otpMustBe4Digit),
  }),
};

export default schema;
