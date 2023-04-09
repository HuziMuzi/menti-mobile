import React from 'react';
import {
  KeyboardAwareScrollView as DefaultKeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

const KeyboardAwareScrollView = (props: KeyboardAwareScrollViewProps) => {
  return <DefaultKeyboardAwareScrollView enableOnAndroid={true} {...props} />;
};

export default KeyboardAwareScrollView;
