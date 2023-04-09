import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@app/constants/fonts';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: Fonts.rFDewiBold,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: Spaces.space6,
    color: Colors.black100,
  },
  text: {
    fontFamily: Fonts.manropeRegular,
    color: Colors.black50,
    textAlign: 'center',
    marginBottom: Spaces.space6,
    paddingHorizontal: Spaces.space5,
  },
});

export default styles;
