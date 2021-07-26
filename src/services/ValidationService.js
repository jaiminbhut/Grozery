import * as Yup from 'yup';
import strings from '../lang/strings';

const schema = {
  mobileNumber: Yup.object({
    mobileNumber: Yup.string()
      .required(strings.emptyMobileNumber)
      .min(10, strings.mobileNumberMustBe10Characters),
  }),
};

export default schema;
