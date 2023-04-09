import React, {forwardRef} from 'react';

import {IAppButtonLinkProps} from './types';
import styles from './styles';

import {ITouchableOpacity} from '@ui/types';
import Text from '@ui/Text/Text';
import TouchableOpacity from '@ui/TouchableOpacity/TouchableOpacity';

const AppButtonLink = forwardRef<ITouchableOpacity, IAppButtonLinkProps>(
  ({title, onPress, ...rest}, ref) => {
    return (
      <TouchableOpacity ref={ref} {...rest} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  },
);

export default AppButtonLink;
