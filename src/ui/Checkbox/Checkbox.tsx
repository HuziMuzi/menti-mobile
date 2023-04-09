import React, {forwardRef, useCallback, useEffect, useState} from 'react';
import {Pressable, View} from 'react-native';

import {Props} from './type';
import {getStyles} from './styles';

import Colors from '@ui/colors';
import {Icon} from '@app/ui';

const Checkbox = forwardRef<View, Props>((props, ref) => {
  const {isDefaultChecked, onChange, isDisabled, children} = props;
  const [isChange, setChange] = useState(
    isDefaultChecked ? isDefaultChecked : false,
  );

  const styles = useCallback(
    () => getStyles(props, isChange),
    [props, isChange],
  )();

  const onPress = () => {
    setChange(!isChange);
  };

  useEffect(() => {
    onChange(isChange);
  }, [isChange]);

  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      style={styles.wrap}
      disabled={isDisabled}>
      <View style={styles.checkbox}>
        {isChange && (
          <Icon
            name="Check"
            fill={isDisabled ? Colors.black25 : Colors.black100}
          />
        )}
      </View>
      {children && <View style={styles.children}>{children}</View>}
    </Pressable>
  );
});

export default Checkbox;
