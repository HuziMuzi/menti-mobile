import {StyleSheet} from 'react-native';

import {IAppInputProps} from '@ui/AppInput/types';
import Color from '@app/ui/colors';

export const getStyles = (props: IAppInputProps) => {
  return StyleSheet.create({
    icon: {
      width: 18,
      height: 18,
      color: Color.black25,

      ...(props.size === 'large' && {
        width: 26,
        height: 26,
      }),

      ...(props.size === 'small' && {
        width: 22,
        height: 22,
      }),
    },
  });
};

export default getStyles;
