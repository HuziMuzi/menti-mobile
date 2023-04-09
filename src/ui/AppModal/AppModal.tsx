import React from 'react';
import {Modal, ModalProps, View} from 'react-native';

import styles from './styles';

const AppModal: React.FC<ModalProps> = props => {
  return (
    <Modal {...props}>
      <View style={styles.modal}>
        <View style={styles.body}>{props.children}</View>
      </View>
    </Modal>
  );
};

export default AppModal;
