import React from 'react';
import {Alert} from 'react-native';

import styles from './styles';
import {IProps} from './type';

import {Text, AppModal, AppButton, AppButtonLink} from '@app/ui';
import Strings from '@app/constants/strings';
import {useAppDispatch} from '@app/redux/hooks';
import {
  deletePresentation,
  getAllPresentations,
} from '@app/api/rest/presentation/presentation';

const ModalDeletePresentation = ({
  presentation,
  visible,
  setVisible,
}: IProps) => {
  const dispatch = useAppDispatch();

  const onDeletePresentation = async () => {
    try {
      await dispatch(deletePresentation(presentation.id)).unwrap();
      await dispatch(getAllPresentations());
    } catch (error) {
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
      <Text style={styles.title}>Удалить презентацию?</Text>
      <Text style={styles.desc}>
        Восстановить удаленную презентацию будет невозможно
      </Text>
      <Text style={styles.name}>{presentation.name}</Text>
      <AppButton
        onPress={onDeletePresentation}
        type="danger"
        title={Strings.delete}
        style={styles.button}
      />
      <AppButtonLink title={Strings.cancel} onPress={() => setVisible(false)} />
    </AppModal>
  );
};

export default ModalDeletePresentation;
