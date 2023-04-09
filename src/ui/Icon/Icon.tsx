/* eslint-disable import/namespace */
import React, {forwardRef} from 'react';

import {IProps} from './types';

import {IView} from '@ui/types';
import View from '@ui/View/View';
import * as Icons from '@assets/svg/icons';

const Icon = forwardRef<IView, IProps>(({name, ...rest}, ref) => {
  const IconSvg = Icons[name];

  return (
    <View ref={ref}>
      <IconSvg {...rest} />
    </View>
  );
});

export default Icon;
