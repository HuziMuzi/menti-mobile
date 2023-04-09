import {StyleSheet} from 'react-native';

import {IAppInputProps} from '@ui/AppInput/types';
import Color from '@app/ui/colors';
import Fonts from '@app/constants/fonts';

export const getStyles = (props: IAppInputProps) => {
  return StyleSheet.create({
    counter: {
      fontSize: 16,
      fontFamily: Fonts.manropeRegular,
      color: Color.black25,

      ...(props.size === 'large' && {
        fontSize: 20,
      }),

      ...(props.size === 'small' && {
        fontSize: 16,
      }),
    },
  });
};

export default getStyles;
