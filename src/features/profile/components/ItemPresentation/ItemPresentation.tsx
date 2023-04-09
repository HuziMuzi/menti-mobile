import React, {useState} from 'react';

import DropdownPresentation from '../DropdownPresentation';
import MenuPresentation from '../MenuPresentation';
import ModalDeletePresentation from '../ModalDeletePresentation';
import ModalRenamePresentation from '../ModalRenamePresentation';

import styles from './styles';
import {IProps} from './type';

import {AppButton, Icon, View, Text, TouchableOpacity} from '@app/ui';
import Colors from '@app/ui/colors';
import ModalNotWork from '@app/features/components/ModalNotWork';

const ItemPresentation = ({presentation}: IProps) => {
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [modalRenameVisible, setModalRenameVisible] = useState(false);
  const [modalNotWork, setModalNotWork] = useState(false);

  return (
    <>
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.name}
          onPress={() => setModalNotWork(true)}>
          <Text style={styles.nameText} numberOfLines={1}>
            {presentation.name}
          </Text>
        </TouchableOpacity>

        <View style={styles.buttons}>
          <AppButton
            shape="circle"
            type="primary"
            icon={<Icon name="Play" fill={Colors.white} />}
          />

          <DropdownPresentation>
            <MenuPresentation
              presentation={presentation}
              setModalDeleteVisible={setModalDeleteVisible}
              setModalRenameVisible={setModalRenameVisible}
            />
          </DropdownPresentation>
        </View>
      </View>

      <ModalDeletePresentation
        visible={modalDeleteVisible}
        setVisible={setModalDeleteVisible}
        presentation={presentation}
      />

      <ModalRenamePresentation
        visible={modalRenameVisible}
        setVisible={setModalRenameVisible}
        presentation={presentation}
      />

      <ModalNotWork visible={modalNotWork} setVisible={setModalNotWork} />
    </>
  );
};

export default ItemPresentation;
