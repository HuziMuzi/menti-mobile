import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

import selectAuth from '../../store/selectors/auth';

import styles from './styles';
import {IFormInput, IFormValuesNames} from './types';

import {signUpSchema} from '@app/utils/validationSchema';
import Screens from '@navigation/constants/screens';
import {NavigationType} from '@navigation/types';
import Strings from '@constants/strings';
import {useAppDispatch, useAppSelector} from '@app/redux/hooks';
import api from '@app/api';
import {IErrorResponse} from '@app/api/type';
import {
  AppButton,
  View,
  AppInput,
  AppInputPassword,
  AppInputCounter,
  Text,
} from '@app/ui';

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationType>();
  const {isLoading} = useAppSelector(selectAuth);
  const {registerUser} = api.user;

  const {
    control,
    handleSubmit,
    trigger,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmitSignUp = async (data: IFormInput) => {
    try {
      await dispatch(registerUser(data)).unwrap();
      navigation.navigate(Screens.profile);
    } catch (error) {
      const err = error as IErrorResponse;
      if (err.statusCode === 400) {
        Alert.alert(Strings.error, Strings.emailAlreadyExistsDatabase, [
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
    onChange: (...event: unknown[]) => void,
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
        name="name"
        render={({
          field: {onChange, value, name},
          fieldState: {error, isDirty},
        }) => (
          <AppInputCounter
            maxLength={50}
            onChangeText={text => {
              handleChangeWithValidate(onChange, text, name);
            }}
            isValid={!error && isDirty}
            value={value}
            placeholder={Strings.placeholderNameInput}
            errors={error?.message}
          />
        )}
      />

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
            value={value}
            placeholder={Strings.placeholderEmailInput}
            keyboardType="email-address"
            isValid={!error && isDirty}
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
          <View style={styles.inputPassword}>
            <AppInputPassword
              maxLength={50}
              onChangeText={text => {
                handleChangeWithValidate(onChange, text, name);
              }}
              value={value}
              placeholder={Strings.placeholderCreatePasswordInput}
              isValid={!error && isDirty}
              errors={error?.message}
            />
            {!isDirty && (
              <Text style={styles.passwordText}>{Strings.errorPassword}</Text>
            )}
          </View>
        )}
      />

      <AppButton
        type="primary"
        style={styles.button}
        onPress={handleSubmit(onSubmitSignUp)}
        title={isLoading ? Strings.loading : Strings.signUpNow}
        disabled={!isValid}
      />
    </View>
  );
};

export default SignUpForm;
