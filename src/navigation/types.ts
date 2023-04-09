import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import Screens from './constants/screens';

export type IRouteParamsList = {
  [Screens.home]: undefined;
  [Screens.signIn]: undefined;
  [Screens.signUp]: undefined;
  [Screens.profile]: undefined;
  [Screens.presentation]: undefined;
  [Screens.privacyPolicy]: undefined;
};

export type NavigationType = NativeStackNavigationProp<IRouteParamsList>;
export type PresentationRouteType = RouteProp<IRouteParamsList>;
