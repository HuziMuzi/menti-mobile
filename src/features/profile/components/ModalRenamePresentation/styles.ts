import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@app/constants/fonts';

const styles = StyleSheet.create({
  title: {
    marginBottom: Spaces.space6,
    textAlign: 'center',
    fontFamily: Fonts.rFDewiBold,
    color: Colors.black100,
    fontSize: 24,
  },
  form: {
    gap: Spaces.space6,
  },
});

export default styles;
