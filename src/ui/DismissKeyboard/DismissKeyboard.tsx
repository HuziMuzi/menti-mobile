import React from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

const DismissKeyboard = (props: TouchableWithoutFeedbackProps) => {
  return <TouchableWithoutFeedback onPress={Keyboard.dismiss} {...props} />;
};

export default DismissKeyboard;
