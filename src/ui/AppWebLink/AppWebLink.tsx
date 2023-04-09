import React, {forwardRef} from 'react';

import {IAppWebLinkProps} from './types';

import {ITouchableOpacity} from '@ui/types';
import Text from '@ui/Text/Text';
import TouchableOpacity from '@ui/TouchableOpacity/TouchableOpacity';

const AppWebLink = forwardRef<ITouchableOpacity, IAppWebLinkProps>(
  ({url, title, style, ...rest}, ref) => {
    const handleOnClick = () => {
      console.log(url);
    };

    return (
      <TouchableOpacity ref={ref} {...rest} onPress={handleOnClick}>
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    );
  },
);

export default AppWebLink;
