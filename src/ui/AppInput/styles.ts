import {StyleSheet} from 'react-native';

import {IAppInputProps} from './types';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@constants/fonts';

export const getStyles = (props: IAppInputProps) => {
  return StyleSheet.create({
    container: {
      position: 'relative',

      ...(props.bottomGap && {marginBottom: props.bottomGap}),
    },
    input: {
      fontFamily: Fonts.manropeRegular,
      height: 48,
      paddingHorizontal: Spaces.space4,
      borderWidth: 2,
      borderColor: Colors.black50,
      fontSize: 16,
      borderRadius: 4,

      ...(props.accessoryRight && {
        paddingRight: Spaces.space12,
      }),

      ...(props.accessoryLeft && {
        paddingLeft: Spaces.space12,
      }),

      ...(props.errors && {
        borderColor: Colors.red100,
        backgroundColor: Colors.red33,
      }),

      ...(props.isValid && {
        borderColor: Colors.blue66,
        backgroundColor: Colors.blue33,
      }),

      ...(props.borderBottom && {
        borderColor: Colors.black25,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderRadius: 0,
      }),
    },
    focus: {
      borderColor: Colors.blue100,

      ...(props.isValid && {
        backgroundColor: Colors.white,
      }),

      ...(props.errors && {
        borderColor: Colors.red100,
        backgroundColor: Colors.white,
      }),
    },
    accessory: {
      position: 'absolute',
      top: 0,
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
    },
    accessoryRight: {
      right: 0,
    },
    accessoryLeft: {
      left: 0,
    },
    error: {
      fontFamily: Fonts.manropeRegular,
      fontSize: 12,
      color: Colors.red100,
      marginTop: Spaces.space1,
      position: 'absolute',
      top: '100%',
    },
  });
};

export default getStyles;
