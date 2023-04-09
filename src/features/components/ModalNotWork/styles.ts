import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@app/constants/fonts';

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.manropeRegular,
    color: Colors.red100,
    fontSize: 14,
    marginBottom: Spaces.space6,
    textAlign: 'center',
  },
});

export default styles;
