import {StyleSheet} from 'react-native';

import Fonts from '@constants/fonts';
import Spaces from '@ui/spaces';
import Colors from '@ui/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    marginLeft: Spaces.space2,
    fontSize: 16,
    fontFamily: Fonts.manropeSemiBold,
    color: Colors.black100,
  },
});

export default styles;
