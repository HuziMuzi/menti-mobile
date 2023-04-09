import React from 'react';

import styles from './styles';
import {Props} from './type';

import {Text} from '@app/ui';

const SlideHeading = ({heading}: Props) => {
  return <Text style={styles.heading}>{heading}</Text>;
};

export default SlideHeading;
