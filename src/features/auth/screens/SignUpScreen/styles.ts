import {StyleSheet} from 'react-native';

import Spaces from '@ui/spaces';
import Fonts from '@constants/fonts';
import Colors from '@ui/colors';

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
    marginBottom: Spaces.space2,
  },
  desc: {
    fontFamily: Fonts.manropeRegular,
    color: Colors.black50,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: Spaces.space10,
  },
  form: {
    width: '100%',
    marginBottom: Spaces.space4,
  },
  privacyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  privacy: {
    fontSize: 14,
    color: Colors.black50,
    fontFamily: Fonts.manropeRegular,
  },
  link: {
    color: Colors.blue100,
    fontFamily: Fonts.rFDewiBold,
    fontSize: 14,
  },
  alreadyContainer: {
    marginTop: Spaces.space10,
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
