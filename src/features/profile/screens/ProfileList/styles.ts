import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@app/constants/fonts';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: Spaces.space6,
  },
  title: {
    fontFamily: Fonts.rFDewiBold,
    fontSize: 24,
    marginBottom: Spaces.space6,
    color: Colors.black100,
  },
  button: {
    marginBottom: Spaces.space6,
  },
  search: {
    marginTop: Spaces.space6,
  },
});

export default styles;
