import {ReactNode} from 'react';

export interface IProps {
  left?: ReactNode;
  right?: ReactNode;
  title?: string | number;
  isLogo?: boolean;
  isBorder?: boolean;
}
