import {ITouchableOpacityProps} from '../types';

export interface IGoBackButtonProps extends ITouchableOpacityProps {
  onPress?: (() => void) | undefined;
}
