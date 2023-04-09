import React, {forwardRef} from 'react';
import {TextInput as DefaultTextInput} from 'react-native';

import {ITextInput, ITextInputProps} from '../types';

const TextInput = forwardRef<ITextInput, ITextInputProps>((props, ref) => (
  <DefaultTextInput ref={ref} {...props} />
));

export default TextInput;
