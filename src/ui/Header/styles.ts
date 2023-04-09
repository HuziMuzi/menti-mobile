import {StyleSheet} from 'react-native';

import {IProps} from './types';

import Spaces from '@ui/spaces';
import Colors from '@ui/colors';

const getStyles = (props: IProps) => {
  const {isBorder} = props;

  return StyleSheet.create({
    header: {
      justifyContent: 'center',
      backgroundColor: Colors.white,
      ...(isBorder && {
        borderBottomWidth: 1,
        borderBottomColor: Colors.black25,
      }),
    },
    grid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: Spaces.space5,
    },
    left: {
      flex: 1,
    },
    right: {
      flex: 1,
      alignItems: 'flex-end',
    },
  });
};

export default getStyles;
