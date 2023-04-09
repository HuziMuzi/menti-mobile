import {SvgProps} from 'react-native-svg';

import * as Icons from '@assets/svg/icons';

type IconsKeyType = keyof typeof Icons;

export interface IProps extends SvgProps {
  name: IconsKeyType;
}
