import {ReactNode} from 'react';

import {ITouchableOpacityProps} from '../types';

export interface IProps extends ITouchableOpacityProps {
  onPress?: () => void;
  title?: string;
  type?: 'default' | 'primary' | 'danger';
  size?: 'small' | 'large';
  shape?: 'default' | 'circle';
  icon?: ReactNode;
}
