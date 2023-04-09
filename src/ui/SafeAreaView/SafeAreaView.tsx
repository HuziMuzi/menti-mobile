import React from 'react';
import {
  SafeAreaView as DefaultSafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

const SafeAreaView = (props: SafeAreaViewProps) => (
  <DefaultSafeAreaView
    style={{flex: 1}}
    edges={['right', 'bottom', 'left']}
    {...props}
  />
);

export default SafeAreaView;
