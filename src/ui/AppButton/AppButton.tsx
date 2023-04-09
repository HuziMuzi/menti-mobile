import React, {useCallback} from 'react';

import Text from '../Text/Text';
import TouchableOpacity from '../TouchableOpacity/TouchableOpacity';

import {getStyles} from './styles';
import {IProps} from './types';

const AppButton = (props: IProps) => {
  const styles = useCallback(() => getStyles(props), [props])();

  return (
    <TouchableOpacity
      {...props}
      onPress={props.onPress}
      style={[styles.container, props.style && props.style]}>
      {props.title && <Text style={styles.text}>{props.title}</Text>}
      {props.icon && props.icon}
    </TouchableOpacity>
  );
};

export default AppButton;
