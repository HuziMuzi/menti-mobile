import React, {forwardRef, useCallback, useState} from 'react';

import {getStyles} from './styles';

import {IView} from '@ui/types';
import AppInput from '@ui/AppInput/AppInput';
import TouchableOpacity from '@ui/TouchableOpacity/TouchableOpacity';
import Icon from '@ui/Icon/Icon';
import {IAppInputProps} from '@ui/AppInput/types';

const AppInputPassword = forwardRef<IView, IAppInputProps>((props, ref) => {
  const styles = useCallback(() => getStyles(props), [props])();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handlerSecureEntry = useCallback(
    () => setSecureTextEntry(!secureTextEntry),
    [secureTextEntry],
  );

  return (
    <AppInput
      ref={ref}
      accessoryRight={
        <TouchableOpacity onPress={handlerSecureEntry}>
          <Icon name={secureTextEntry ? 'EyeSlash' : 'Eye'} {...styles.icon} />
        </TouchableOpacity>
      }
      secureTextEntry={secureTextEntry}
      {...props}
    />
  );
});

export default AppInputPassword;
