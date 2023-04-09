import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RouteParamsList, ScreenParamsList} from '../../navigation/type';

export type Props = NativeStackScreenProps<RouteParamsList>;

export const isRouteParams = (
  params: ScreenParamsList | undefined,
): params is ScreenParamsList => {
  return typeof params !== 'undefined';
};
