import React from 'react';

import styles from './styles';
import {IProps} from './type';

import {Text, AppModal, AppButton} from '@app/ui';
import Strings from '@app/constants/strings';

const ModalNotWork = ({visible, setVisible}: IProps) => {
  return (
    <AppModal animationType="fade" transparent={true} visible={visible}>
      <Text style={styles.text}>{Strings.inDevelopmentDesc}</Text>
      <AppButton
        type="primary"
        title={Strings.close}
        onPress={() => setVisible(false)}
      />
    </AppModal>
  );
};

export default ModalNotWork;
