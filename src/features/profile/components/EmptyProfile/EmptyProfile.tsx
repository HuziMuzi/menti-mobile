import React from 'react';

import CreatePresentation from '../CreatePresentation';

import styles from './styles';

import {View, Text, Container, SafeAreaView} from '@app/ui';
import Strings from '@app/constants/strings';

const EmptyProfile = () => {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Container>
          <Text style={styles.title}>{Strings.noPresentation}</Text>
          <Text style={styles.text}>{Strings.createPresentationDesc}</Text>
          <CreatePresentation />
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default EmptyProfile;
