import {StyleSheet, Dimensions} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@constants/fonts';

const {width, scale} = Dimensions.get('window');
const windowWidth = width * scale;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: Spaces.space6,
  },
  logo: {
    marginBottom: windowWidth < 640 ? Spaces.space6 : Spaces.space16,
    alignSelf: 'center',
  },
  title: {
    fontFamily: Fonts.rFDewiBold,
    fontSize: 20,
    textAlign: 'center',
    color: Colors.black100,
    marginBottom: Spaces.space6,
  },
  form: {
    marginBottom: Spaces.space4,
  },
  text: {
    fontFamily: Fonts.manropeRegular,
    color: Colors.black50,
    fontSize: windowWidth < 640 ? 12 : 14,
  },
  link: {
    color: Colors.blue100,
    fontFamily: Fonts.rFDewiBold,
    fontSize: windowWidth < 640 ? 12 : 14,
  },
  footer: {
    paddingVertical: Spaces.space6,
  },
  footerButton: {
    marginBottom: Spaces.space6,
  },
  footerUserName: {
    fontSize: 16,
    alignSelf: 'center',
  },
});

export default styles;
