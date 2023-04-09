import React, {forwardRef} from 'react';
import {Text as DefaultText} from 'react-native';

import {IText, ITextProps} from '../types';

const Text = forwardRef<IText, ITextProps>((props, ref) => (
  <DefaultText ref={ref} {...props} />
));

export default Text;
