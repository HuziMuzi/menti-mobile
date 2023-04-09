import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Controller, useForm} from 'react-hook-form';

import selectProfile from '../../store/selectors/profile';

import styles from './styles';

import {
  View,
  AppButton,
  Text,
  Icon,
  AppInputCounter,
  AppButtonLink,
  AppModal,
} from '@app/ui';
import Strings from '@app/constants/strings';
import Colors from '@app/ui/colors';
import {useAppDispatch, useAppSelector} from '@app/redux/hooks';
import api from '@app/api';
import {getAllPresentations} from '@app/api/rest/presentation/presentation';

const CreatePresentation = () => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const {isLoading} = useAppSelector(selectProfile);
  const {createPresentation} = api.presentation;

  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty},
  } = useForm({
    defaultValues: {
      name: '',
    },
  });

  const onSubmitCreatePresentation = async (data: {name: string}) => {
    try {
      await dispatch(createPresentation(data)).unwrap();
      await dispatch(getAllPresentations());
      setModalVisible(false);
      reset();
    } catch (error) {
      setModalVisible(false);
      Alert.alert(Strings.error, Strings.tryAgainLater, [
        {
          text: Strings.close,
          style: 'cancel',
        },
      ]);
    }
  };

  return (
    <>
      <AppModal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Text style={styles.title}>{Strings.createNewPresentation}</Text>
        <View style={styles.form}>
          <Controller
            name="name"
            control={control}
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
            title={isLoading ? Strings.creating : Strings.createPresentation}
            disabled={!isDirty}
            onPress={handleSubmit(onSubmitCreatePresentation)}
          />
          <AppButtonLink
            title={Strings.cancel}
            onPress={() => {
              setModalVisible(false);
              reset();
            }}
          />
        </View>
      </AppModal>
      <AppButton
        type="primary"
        title={Strings.create}
        icon={<Icon name="Plus" fill={Colors.white} />}
        onPress={() => setModalVisible(true)}
      />
    </>
  );
};

export default CreatePresentation;
