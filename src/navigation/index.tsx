import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './stacks/rootStack';
import DefaultTheme from './themes/DefaultTheme';

const Navigation = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
