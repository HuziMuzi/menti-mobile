import React, {forwardRef} from 'react';
import {Button as DefaultButton} from 'react-native';

import {IButton, IButtonProps} from '../types';

const Button = forwardRef<IButton, IButtonProps>((props, ref) => (
  <DefaultButton ref={ref} {...props} />
));

export default Button;
