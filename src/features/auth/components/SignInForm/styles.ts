import {StyleSheet} from 'react-native';

import Spaces from '@ui/spaces';
import Colors from '@app/ui/colors';
import Fonts from '@app/constants/fonts';

const styles = StyleSheet.create({
  form: {
    gap: Spaces.space8,
  },
  forgotPassContainer: {
    alignSelf: 'flex-end',
  },
  forgotPassText: {
    fontSize: 14,
    fontFamily: Fonts.rFDewiBold,
    color: Colors.blue100,
  },
  button: {
    marginTop: -16,
  },
});

export default styles;
