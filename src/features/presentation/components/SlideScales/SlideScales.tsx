import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {Controller, useForm} from 'react-hook-form';

import SlideHeading from '../SlideHeading';
import SlideDescription from '../SlideDescription';

import styles from './styles';
import {Props, FormData} from './type';

import {View, Text, AppButton} from '@app/ui';
import Strings from '@app/constants/strings';

const SlideScales = ({slide}: Props) => {
  const {control, handleSubmit} = useForm<FormData>({
    defaultValues: slide.choices.reduce((result, item) => {
      return {...result, [item.id]: slide.range.min};
    }, {}),
  });

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <>
      <SlideHeading heading={slide.heading} />
      <SlideDescription description={slide.description} />
      <View style={styles.sliders}>
        {slide.choices.map(item => (
          <Controller
            key={item.id}
            control={control}
            name={item.id.toString()}
            render={({field: {onChange, value}}) => (
              <View>
                <Text style={styles.sliderTitle}>{item.label}</Text>
                <View style={styles.sliderWrap}>
                  <Text style={styles.sliderTextMinMax}>{slide.range.min}</Text>
                  <Slider
                    value={value}
                    onValueChange={val => {
                      val = Array.isArray(val) ? (val[0] as number) : val;
                      onChange(val);
                    }}
                    step={1}
                    minimumValue={slide.range.min}
                    maximumValue={slide.range.max}
                    containerStyle={styles.sliderContainer}
                    trackStyle={styles.sliderTrack}
                    minimumTrackTintColor="#5E60CE"
                    renderThumbComponent={() => (
                      <View style={styles.sliderThumb}>
                        <Text style={styles.sliderThumbText}>{value}</Text>
                      </View>
                    )}
                  />
                  <Text style={styles.sliderTextMinMax}>{slide.range.max}</Text>
                </View>
                <View style={styles.sliderFooter}>
                  <Text style={styles.sliderFooterText}>
                    {slide.range.labels[0]}
                  </Text>
                  <Text style={styles.sliderFooterText}>
                    {slide.range.labels[1]}
                  </Text>
                </View>
              </View>
            )}
          />
        ))}
      </View>
      <AppButton title={Strings.submit} onPress={onSubmit} type="primary" />
    </>
  );
};

export default SlideScales;
