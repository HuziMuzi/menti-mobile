import React, {forwardRef} from 'react';
import {Pressable as DefaultPressable} from 'react-native';

import {IView, IPressableProps} from '../types';

const Pressable = forwardRef<IView, IPressableProps>((props, ref) => (
  <DefaultPressable ref={ref} {...props} />
));

export default Pressable;
