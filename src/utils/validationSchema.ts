import * as yup from 'yup';

import Strings from '@constants/strings';

export const presentationCodeSchema = yup.object({
  presentationCode: yup.string().min(8).required(),
});

export const signInSchema = yup.object({
  email: yup.string().email(Strings.errorEmail).required(Strings.errorRequired),
  password: yup.string().required(Strings.errorRequired),
});

export const signUpSchema = yup.object({
  name: yup
    .string()
    .required(Strings.errorRequired)
    .matches(/^[a-zA-Zа-яА-ЯёЁ\-_ ]+$/, Strings.errorName),
  email: yup.string().email(Strings.errorEmail).required(Strings.errorRequired),
  password: yup
    .string()
    .min(8, Strings.errorPassword)
    .matches(/[A-Za-z]+/, Strings.errorPassword)
    .matches(/[!@#$%^&*]+/, Strings.errorPassword)
    .matches(/\d+/, Strings.errorPassword)
    .required(Strings.errorRequired),
});
