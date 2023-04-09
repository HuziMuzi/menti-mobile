import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {ITouchableOpacityProps} from '../types';

export interface IAppWebLinkProps extends ITouchableOpacityProps {
  url: string;
  title: string;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
}
