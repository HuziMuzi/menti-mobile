import {StyleSheet} from 'react-native';

import Spaces from '@ui/spaces';
import Colors from '@app/ui/colors';
import Fonts from '@app/constants/fonts';

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    paddingLeft: Spaces.space10,
    paddingRight: Spaces.space5,
  },
  close: {
    position: 'absolute',
    right: Spaces.space5,
  },
  list: {
    flex: 1,
    marginBottom: Spaces.space10,
  },
  item: {
    paddingVertical: Spaces.space4,
    flexDirection: 'row',
    gap: Spaces.space4,
    alignItems: 'center',
  },
  user: {
    marginBottom: Spaces.space10,
    flexDirection: 'row',
    gap: Spaces.space4,
    alignItems: 'center',
  },
  icon: {
    width: 18,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.manropeRegular,
    color: Colors.black100,
    fontSize: 18,
  },
  titleFocus: {
    color: Colors.blue100,
  },
  userTitle: {
    fontSize: 16,
    color: Colors.black100,
    fontFamily: Fonts.manropeRegular,
    flexDirection: 'row',
    flex: 1,
  },
  userIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black12,
    borderRadius: 100,
  },
});

export default styles;
