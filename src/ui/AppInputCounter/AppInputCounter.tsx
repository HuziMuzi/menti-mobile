import React, {forwardRef, useCallback, useEffect, useState} from 'react';

import {getStyles} from './styles';

import {IView} from '@ui/types';
import AppInput from '@ui/AppInput/AppInput';
import Text from '@ui/Text/Text';
import {IAppInputProps} from '@ui/AppInput/types';

const AppInputCounter = forwardRef<IView, IAppInputProps>((props, ref) => {
  const styles = useCallback(() => getStyles(props), [props])();
  const maxLength = props.maxLength ? props.maxLength : 50;

  const [counter, setCounter] = useState(maxLength);

  useEffect(() => {
    const value = props.value ? props.value : '';
    setCounter(maxLength - value.length);
  }, [props.value]);

  return (
    <AppInput
      maxLength={maxLength}
      ref={ref}
      accessoryRight={<Text style={styles.counter}>{counter}</Text>}
      {...props}
    />
  );
});

export default AppInputCounter;
