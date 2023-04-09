import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@app/constants/fonts';

const styles = StyleSheet.create({
  item: {
    marginTop: Spaces.space8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    gap: Spaces.space2,
  },
  name: {
    marginRight: Spaces.space2,
    flex: 1,
  },
  nameText: {
    fontFamily: Fonts.manropeSemiBold,
    color: Colors.black100,
    alignSelf: 'stretch',
    fontSize: 16,
  },
  more: {
    position: 'relative',
  },
  menu: {
    position: 'absolute',
  },

  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalBody: {
    width: 210,
    backgroundColor: Colors.white,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 4,
    position: 'absolute',
  },
});

export default styles;
