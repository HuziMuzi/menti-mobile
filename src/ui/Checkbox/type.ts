import {ReactNode} from 'react';

export type Props = {
  onChange: (e: boolean) => void;
  isDefaultChecked?: boolean;
  isDisabled?: boolean;
  isBorder?: boolean;
  children?: ReactNode;
};
