import React from 'react';

import styles from './styles';
import {IGoBackButtonProps} from './types';

import Strings from '@constants/strings';
import TouchableOpacity from '@ui/TouchableOpacity/TouchableOpacity';
import Text from '@ui/Text/Text';
import Icon from '@ui/Icon/Icon';

const GoBackButton = ({onPress}: IGoBackButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={'GoBackArrow'} />
      <Text style={styles.text}>{Strings.goBack}</Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;
