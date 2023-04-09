import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@constants/fonts';

const styles = StyleSheet.create({
  main: {
    paddingTop: Spaces.space15,
    paddingBottom: Spaces.space6,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: Spaces.space10,
  },
  greetings: {
    fontFamily: Fonts.rFDewiBold,
    color: Colors.black100,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: Spaces.space4,
  },
  desc: {
    fontFamily: Fonts.rFDewiRegular,
    color: Colors.black50,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: Spaces.space10,
  },
  form: {
    width: '100%',
    marginBottom: Spaces.space10,
  },
  link: {
    fontSize: 14,
    fontFamily: Fonts.rFDewiBold,
    color: Colors.blue100,
  },
  alreadyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alreadyText: {
    fontSize: 14,
    fontFamily: Fonts.manropeRegular,
    color: Colors.black100,
  },
});

export default styles;
