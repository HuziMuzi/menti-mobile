import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';

const styles = StyleSheet.create({
  more: {
    position: 'relative',
  },
  menu: {
    position: 'absolute',
  },

  dropdown: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: 185,
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
