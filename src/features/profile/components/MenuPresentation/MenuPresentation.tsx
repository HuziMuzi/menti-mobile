import React from 'react';
import dayjs from 'dayjs';

import {useDropdownPresentation} from '../DropdownPresentation/DropdownPresentation';

import styles from './styles';
import {IProps} from './type';

import {Icon, View, Text, TouchableOpacity} from '@app/ui';
import Colors from '@app/ui/colors';
import Strings from '@app/constants/strings';

const MenuPresentation = ({
  presentation,
  setModalDeleteVisible,
  setModalRenameVisible,
}: IProps) => {
  const createdData = dayjs(presentation.created_at).format('DD.MM.YYYY');
  const updatedData = dayjs(presentation.updated_at).format('DD.MM.YYYY');

  const {setDropdownVisible} = useDropdownPresentation();

  const onPressDelete = () => {
    setDropdownVisible(false);
    setModalDeleteVisible(true);
  };

  const onPressRename = () => {
    setDropdownVisible(false);
    setModalRenameVisible(true);
  };

  return (
    <View style={styles.list}>
      <View style={styles.border}>
        <TouchableOpacity
          style={[styles.item, styles.link]}
          onPress={onPressRename}>
          <View style={styles.icon}>
            <Icon name="Edit" />
          </View>
          <Text style={styles.title}>{Strings.rename}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.border}>
        <TouchableOpacity style={[styles.item, styles.link]}>
          <View style={styles.icon}>
            <Icon name="Copy" />
          </View>
          <Text style={styles.title}>{Strings.duplicate}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.border}>
        <TouchableOpacity
          style={[styles.item, styles.link]}
          onPress={onPressDelete}>
          <View style={styles.icon}>
            <Icon name="Trash" fill={Colors.red100} />
          </View>
          <Text style={{...styles.title, color: Colors.red100}}>
            {Strings.delete}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.border}>
        <View style={styles.item}>
          <Text style={styles.subtitle}>{Strings.dateChange}:</Text>
          <Text style={styles.title}>{updatedData}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.subtitle}>{Strings.dateCreation}:</Text>
        <Text style={styles.title}>{createdData}</Text>
      </View>
    </View>
  );
};

export default MenuPresentation;
