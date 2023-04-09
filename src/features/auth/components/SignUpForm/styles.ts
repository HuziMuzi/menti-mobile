import {StyleSheet} from 'react-native';

import Spaces from '@ui/spaces';
import Colors from '@app/ui/colors';
import Fonts from '@app/constants/fonts';

const styles = StyleSheet.create({
  form: {
    gap: 32,
  },
  button: {
    marginTop: Spaces.space10,
  },
  inputPassword: {
    position: 'relative',
  },
  passwordText: {
    fontFamily: Fonts.manropeRegular,
    fontSize: 12,
    color: Colors.black50,
    marginTop: Spaces.space1,
    position: 'absolute',
    top: '100%',
  },
});

export default styles;
