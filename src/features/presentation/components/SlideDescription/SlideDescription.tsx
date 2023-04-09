import React from 'react';

import styles from './styles';
import {Props} from './type';

import {Text} from '@app/ui';

const SlideDescription = ({description}: Props) => {
  return <Text style={styles.description}>{description}</Text>;
};

export default SlideDescription;
