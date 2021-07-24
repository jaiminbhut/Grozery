import Fonts from './Fonts';
import { moderateScale } from './Metrics';

const Typography = {
  _26Medium: {
    fontFamily: Fonts.type.poppinsMedium,
    fontSize: moderateScale(26),
  },
  _16SemiBold: {
    fontFamily: Fonts.type.poppinsSemiBold,
    fontSize: moderateScale(16),
  },
  _14Regular: {
    fontFamily: Fonts.type.poppinsRegular,
    fontSize: moderateScale(14),
  },
};

export default Typography;
