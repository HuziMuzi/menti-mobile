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
  desc: {
    fontFamily: Fonts.manropeRegular,
    color: Colors.black100,
    fontSize: 16,
    marginBottom: Spaces.space2,
  },
  name: {
    color: Colors.red100,
    fontFamily: Fonts.manropeSemiBold,
    fontSize: 16,
    marginBottom: Spaces.space6,
  },
  button: {
    marginBottom: Spaces.space6,
  },
});

export default styles;
