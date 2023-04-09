import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import selectPresentation from '../store/selectors/presentation';
import SlideScreen from '../screens/SlideScreen';

import {RouteParamsList} from './type';

import {useAppSelector} from '@app/redux/hooks';

const Stack = createNativeStackNavigator<RouteParamsList>();

const PresentationStack = () => {
  const {presentation} = useAppSelector(selectPresentation);

  return (
    <Stack.Navigator initialRouteName="1">
      {presentation?.slides.map(item => (
        <Stack.Screen
          key={item.id}
          name={item.order.toString()}
          component={SlideScreen}
          options={{headerShown: false}}
          initialParams={{
            slide: item,
            countSlides: presentation.slides.length,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default PresentationStack;
