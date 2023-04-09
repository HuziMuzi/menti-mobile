import React from 'react';

import styles from './styles';
import {Props, isRouteParams} from './type';

import {AppButton, Container, Text, View} from '@app/ui';

const SlideScreen = ({route, navigation}: Props) => {
  if (!isRouteParams(route.params)) {
    throw new Error('Error route params SlideScreen');
  }

  const {countSlides, slide} = route.params;

  const onPressNextSlide = () => {
    const nameNextSlide = (slide.order + 1).toString();
    navigation.navigate(nameNextSlide);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.main}>
        <Container>
          <View>
            <Text style={styles.text}>{slide.order}</Text>
            {slide.order < countSlides && (
              <AppButton title="Next" onPress={onPressNextSlide} />
            )}
            <AppButton title="Back" onPress={() => navigation.goBack()} />
          </View>
        </Container>
      </View>
    </View>
  );
};

export default SlideScreen;
