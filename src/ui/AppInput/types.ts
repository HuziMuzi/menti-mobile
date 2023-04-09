import {ReactNode} from 'react';

import {ITextInputProps} from '@ui/types';

export interface IAppInputProps extends ITextInputProps {
  status?: 'success' | 'danger' | 'disabled';
  bottomGap?: number;
  size?: 'small' | 'large';
  isFocus?: boolean;
  accessoryLeft?: ReactNode;
  accessoryRight?: ReactNode;
  errors?: string | undefined;
  isValid?: boolean;
  borderBottom?: boolean;
}
