import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import Icon from '../Icon/Icon';

const DrawerButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity {...props}>
      <Icon name="Burger" />
    </TouchableOpacity>
  );
};

export default DrawerButton;
