import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IRouteParamsList} from '../types';
import Screens from '../constants/screens';

import {useAppSelector} from '@app/redux/hooks';
import selectAuth from '@app/features/auth/store/selectors/auth';
import ProfileScreen from '@app/features/profile/screens/ProfileScreen';
import SignUpScreen from '@features/auth/screens/SignUpScreen';
import PresentationScreen from '@app/features/presentation/screens/PresentationScreen';
import SignInScreen from '@features/auth/screens/SignInScreen';
import HomeScreen from '@app/features/screens/HomeScreen';
import PrivacyPolicyScreen from '@app/features/screens/PrivacyPolicyScreen';
import {Header} from '@app/ui';

const RootStack = createNativeStackNavigator<IRouteParamsList>();

const RootNavigator = () => {
  const {user} = useAppSelector(selectAuth);

  return (
    <RootStack.Navigator initialRouteName={Screens.home}>
      <RootStack.Screen
        name={Screens.presentation}
        component={PresentationScreen}
        options={() => ({header: () => <Header isBorder isLogo />})}
      />
      {user ? (
        <RootStack.Screen
          name={Screens.profile}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      ) : (
        <RootStack.Group
          screenOptions={() => ({
            header: () => <Header />,
          })}>
          <RootStack.Screen name={Screens.signIn} component={SignInScreen} />
          <RootStack.Screen name={Screens.signUp} component={SignUpScreen} />
        </RootStack.Group>
      )}
      <RootStack.Screen
        name={Screens.home}
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <RootStack.Screen
        name={Screens.privacyPolicy}
        component={PrivacyPolicyScreen}
        options={() => ({header: () => <Header isBorder isLogo />})}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
