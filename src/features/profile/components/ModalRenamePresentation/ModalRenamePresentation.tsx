import React from 'react';
import {Alert} from 'react-native';
import {Controller, useForm} from 'react-hook-form';

import styles from './styles';
import {IProps} from './type';

import {
  View,
  AppButton,
  Text,
  AppInputCounter,
  AppButtonLink,
  AppModal,
} from '@app/ui';
import Strings from '@app/constants/strings';
import {useAppDispatch} from '@app/redux/hooks';
import api from '@app/api';
import {getAllPresentations} from '@app/api/rest/presentation/presentation';

const ModalRenamePresentation = ({
  presentation,
  visible,
  setVisible,
}: IProps) => {
  const dispatch = useAppDispatch();
  const {updatePresentation} = api.presentation;

  const {
    control,
    handleSubmit,
    setValue,
    formState: {isValid},
  } = useForm({
    defaultValues: {
      name: presentation.name,
    },
  });

  const onSubmitCreatePresentation = async (data: {name: string}) => {
    const request = {id: presentation.id, presentation: data};
    try {
      await dispatch(updatePresentation(request)).unwrap();
      await dispatch(getAllPresentations());
      setVisible(false);
    } catch (error) {
      setVisible(false);
      Alert.alert(Strings.error, Strings.tryAgainLater, [
        {
          text: Strings.close,
          style: 'cancel',
        },
      ]);
    }
  };

  return (
    <AppModal animationType="fade" transparent={true} visible={visible}>
      <Text style={styles.title}>{Strings.renamePresentation}</Text>
      <View style={styles.form}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <AppInputCounter
              placeholder={Strings.enterName}
              maxLength={100}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <AppButton
          type="primary"
          title={Strings.save}
          disabled={!isValid}
          onPress={handleSubmit(onSubmitCreatePresentation)}
        />
        <AppButtonLink
          title={Strings.cancel}
          onPress={() => {
            setVisible(false);
            setValue('name', presentation.name);
          }}
        />
      </View>
    </AppModal>
  );
};

export default ModalRenamePresentation;
