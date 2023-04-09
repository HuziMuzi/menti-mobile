import React, {forwardRef} from 'react';
import {View as DefaultView} from 'react-native';

import {IView, IViewProps} from '../types';

import styles from './styles';

const Container = forwardRef<IView, IViewProps>((props, ref) => (
  <DefaultView ref={ref} {...props} style={[styles.container, props.style]} />
));

export default Container;
