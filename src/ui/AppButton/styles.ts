import {StyleSheet} from 'react-native';

import {IProps} from './types';

import Colors from '@ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@constants/fonts';

export const getStyles = (props: IProps) => {
  return StyleSheet.create({
    container: {
      borderRadius: 4,
      elevation: 0,
      paddingHorizontal: Spaces.space4,
      backgroundColor: Colors.black12,
      height: Spaces.space12,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',

      ...(props.type === 'primary' && {
        backgroundColor: Colors.blue100,
      }),

      ...(props.type === 'danger' && {
        backgroundColor: Colors.red100,
      }),

      ...(props.disabled && {
        backgroundColor: Colors.blue66,
      }),

      ...(props.shape === 'circle' && {
        borderRadius: 100,
        paddingHorizontal: 0,
        paddingVertical: 0,
        width: 40,
        height: 40,
      }),
    },

    text: {
      fontFamily: Fonts.rFDewiBold,
      fontSize: 18,
      color: Colors.black100,

      ...(props.type === 'primary' && {
        color: Colors.white,
      }),

      ...(props.type === 'danger' && {
        color: Colors.white,
      }),

      ...(props.icon && {
        marginRight: Spaces.space2,
      }),
    },
  });
};

export default getStyles;
