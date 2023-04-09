import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {FormInput} from './types';

import {NavigationType} from '@navigation/types';
import Screens from '@navigation/constants/screens';
import Strings from '@constants/strings';
import {useAppDispatch} from '@app/redux/hooks';
import {presentationCodeSchema} from '@app/utils/validationSchema';
import AppButton from '@app/ui/AppButton/AppButton';
import AppInput from '@app/ui/AppInput/AppInput';
import Spaces from '@app/ui/spaces';
import {getPresentationByCode} from '@app/api/rest/presentation/presentation';
import {IErrorResponse} from '@app/api/type';

const PresentationCodeForm = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationType>();

  const {
    control,
    handleSubmit,
    reset,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(presentationCodeSchema),
    defaultValues: {
      presentationCode: '',
    },
  });

  const onSubmit = async (data: FormInput) => {
    try {
      await dispatch(getPresentationByCode(data.presentationCode)).unwrap();
      navigation.navigate(Screens.presentation);
      reset();
    } catch (error) {
      const err = error as IErrorResponse;
      if (err.statusCode === 401) {
        console.log(401);
      }
    }
  };

  return (
    <>
      <Controller
        control={control}
        name="presentationCode"
        render={({field: {onChange, value}}) => (
          <AppInput
            maxLength={8}
            bottomGap={Spaces.space8}
            keyboardType="numeric"
            onChangeText={onChange}
            value={value}
            placeholder={Strings.placeholderSessionCode}
            isValid={isValid}
          />
        )}
      />

      <AppButton
        type="primary"
        onPress={handleSubmit(onSubmit)}
        title={Strings.proceed}
        disabled={!isValid}
      />
    </>
  );
};

export default PresentationCodeForm;
