import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@app/constants/fonts';

const styles = StyleSheet.create({
  form: {
    gap: Spaces.space8,
  },
  fields: {
    gap: Spaces.space6,
  },
  checkboxText: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.black100,
    fontFamily: Fonts.manropeRegular,
  },
  requirement: {
    textAlign: 'center',
    marginBottom: Spaces.space4,
    color: Colors.black50,
    fontSize: 14,
    fontFamily: Fonts.manropeRegular,
  },
});

export default styles;
