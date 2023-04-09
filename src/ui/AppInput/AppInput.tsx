import React, {forwardRef, useCallback, useState} from 'react';

import {getStyles} from './styles';
import {IAppInputProps} from './types';

import TextInput from '@ui/TextInput/TextInput';
import View from '@ui/View/View';
import {IView} from '@ui/types';
import Text from '@ui/Text/Text';

const AppInput = forwardRef<IView, IAppInputProps>((props, ref) => {
  const styles = useCallback(() => getStyles(props), [props])();
  const [focus, setFocus] = useState(false);

  const handlerFocus = () => {
    setFocus(true);
  };

  const handlerEndEditing = () => {
    setFocus(false);
  };

  return (
    <View ref={ref} style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, focus && styles.focus]}
        onFocus={handlerFocus}
        onEndEditing={handlerEndEditing}
      />
      {props.accessoryLeft && (
        <View style={[styles.accessory, styles.accessoryLeft]}>
          {props.accessoryLeft}
        </View>
      )}
      {props.accessoryRight && (
        <View style={[styles.accessory, styles.accessoryRight]}>
          {props.accessoryRight}
        </View>
      )}
      {props.errors && <Text style={styles.error}>{props.errors}</Text>}
    </View>
  );
});

export default AppInput;
