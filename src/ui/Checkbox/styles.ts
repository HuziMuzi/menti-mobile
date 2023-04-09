import {StyleSheet} from 'react-native';

import {Props} from './type';

import Colors from '@ui/colors';
import Spaces from '@ui/spaces';

export const getStyles = (props: Props, isChange: boolean) => {
  return StyleSheet.create({
    wrap: {
      alignSelf: 'flex-start',

      ...(props.children && {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spaces.space4,
      }),

      ...(props.isBorder && {
        borderWidth: 2,
        borderColor: Colors.black50,
        paddingHorizontal: Spaces.space4,
        paddingVertical: Spaces.space2,
        borderRadius: 4,
      }),

      ...(props.isBorder &&
        isChange &&
        !props.isDisabled && {
          borderColor: Colors.blue100,
        }),
    },

    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1.5,
      borderRadius: 4,
      borderColor: Colors.black50,
      justifyContent: 'center',
      alignItems: 'center',

      ...(isChange &&
        !props.isDisabled && {
          borderColor: Colors.blue100,
        }),

      ...(props.isDisabled && {
        borderColor: Colors.black25,
      }),
    },

    children: {
      ...(props.isBorder ? {flex: 1} : {flexShrink: 1}),
    },
  });
};

export default getStyles;
