import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: Spaces.space5,
  },
  body: {
    backgroundColor: Colors.white,
    padding: Spaces.space6,
    borderRadius: 15,
    width: '100%',
  },
});

export default styles;
