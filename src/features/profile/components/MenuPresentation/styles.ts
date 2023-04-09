import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@app/constants/fonts';

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: Spaces.space4,
    paddingVertical: Spaces.space1,
  },
  item: {
    paddingTop: Spaces.space3,
    paddingBottom: Spaces.space3,
  },
  link: {
    flexDirection: 'row',
    gap: Spaces.space4,
    alignItems: 'center',
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.black12,
  },
  title: {
    color: Colors.black100,
    fontFamily: Fonts.manropeSemiBold,
    fontSize: 15,
  },
  subtitle: {
    color: Colors.black50,
    fontFamily: Fonts.manropeRegular,
    fontSize: 13,
  },
  icon: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
