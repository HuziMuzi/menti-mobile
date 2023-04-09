import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  main: {
    backgroundColor: Colors.blue33,
    flex: 1,
    paddingVertical: Spaces.space6,
  },
  text: {
    color: Colors.black50,
    fontSize: 20,
  },
  sessionCode: {
    color: Colors.black100,
    fontWeight: '500',
    fontSize: 20,
  },
});

export default styles;
