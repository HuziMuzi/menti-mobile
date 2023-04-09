import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

import selectAuth from '../../store/selectors/auth';

import {IFormInput, IFormValuesNames} from './types';
import styles from './styles';

import {signInSchema} from '@app/utils/validationSchema';
import {NavigationType} from '@navigation/types';
import Screens from '@navigation/constants/screens';
import Strings from '@constants/strings';
import {useAppDispatch, useAppSelector} from '@app/redux/hooks';
import api from '@app/api';
import {IErrorResponse} from '@app/api/type';
import {
  View,
  AppButton,
  Text,
  AppInput,
  AppInputPassword,
  TouchableOpacity,
} from '@app/ui';

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationType>();
  const {isLoading} = useAppSelector(selectAuth);
  const {loginUser} = api.user;

  const {
    control,
    handleSubmit,
    trigger,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitSignIn = async (data: IFormInput) => {
    try {
      await dispatch(loginUser(data)).unwrap();
      navigation.navigate(Screens.profile);
    } catch (error) {
      const err = error as IErrorResponse;
      if (err.statusCode === 401) {
        Alert.alert(Strings.error, Strings.incorrectUserPassword, [
          {
            text: Strings.close,
            style: 'cancel',
          },
        ]);
      } else {
        Alert.alert(Strings.error, Strings.tryAgainLater, [
          {
            text: Strings.close,
            style: 'cancel',
          },
        ]);
      }
    }
  };

  const handleChangeWithValidate = (
    onChange: (text: string) => void,
    text: string,
    name: IFormValuesNames,
  ) => {
    onChange(text);
    trigger(name);
  };

  return (
    <View style={styles.form}>
      <Controller
        control={control}
        name="email"
        render={({
          field: {onChange, value, name},
          fieldState: {error, isDirty},
        }) => (
          <AppInput
            maxLength={50}
            onChangeText={text => {
              handleChangeWithValidate(onChange, text, name);
            }}
            isValid={!error && isDirty}
            value={value}
            placeholder={Strings.placeholderEmailInput}
            keyboardType="email-address"
            errors={error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({
          field: {onChange, value, name},
          fieldState: {error, isDirty},
        }) => (
          <AppInputPassword
            maxLength={50}
            isValid={!error && isDirty}
            onChangeText={text => {
              handleChangeWithValidate(onChange, text, name);
            }}
            value={value}
            placeholder={Strings.placeholderEnterPasswordInput}
            errors={error?.message}
          />
        )}
      />

      <TouchableOpacity style={styles.forgotPassContainer}>
        <Text style={styles.forgotPassText}>{Strings.forgotPassword}</Text>
      </TouchableOpacity>

      <AppButton
        type="primary"
        onPress={handleSubmit(onSubmitSignIn)}
        title={isLoading ? Strings.loading : Strings.signIn}
        disabled={!isValid}
        style={styles.button}
      />
    </View>
  );
};

export default SignInForm;
