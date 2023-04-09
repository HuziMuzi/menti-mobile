import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import SlideHeading from '../SlideHeading';
import SlideDescription from '../SlideDescription';

import styles from './styles';
import {Props, FormData} from './type';

import {AppButton, Text, View, Checkbox} from '@app/ui';
import Strings from '@app/constants/strings';

const SlideChoices = ({slide}: Props) => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {isDirty},
  } = useForm<FormData>({
    defaultValues: slide.choices.reduce((result, item) => {
      return {...result, [item.id]: false};
    }, {}),
  });

  const onSubmit = handleSubmit(data => {
    console.log(data);
    console.log(navigation.getState().routes);
  });

  return (
    <>
      <SlideHeading heading={slide.heading} />
      <SlideDescription description={slide.description} />

      <Text style={styles.requirement}>Выберите несколько ответов</Text>
      <View style={styles.form}>
        <View style={styles.fields}>
          {slide.choices.map(item => (
            <Controller
              key={item.id}
              control={control}
              name={item.id.toString()}
              render={({field: {onChange, value}}) => (
                <Checkbox onChange={onChange} isBorder isDefaultChecked={value}>
                  <Text style={styles.checkboxText}>{item.label}</Text>
                </Checkbox>
              )}
            />
          ))}
        </View>

        <AppButton
          title={Strings.submit}
          onPress={onSubmit}
          type="primary"
          disabled={!isDirty}
        />
      </View>
    </>
  );
};

export default SlideChoices;
