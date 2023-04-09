import React from 'react';

import styles from './styles';

import {
  SafeAreaView,
  View,
  Text,
  Container,
  ScrollView,
  Checkbox,
  Icon,
} from '@app/ui';

const PrivacyPolicyScreen = () => {
  const func = (evt: boolean) => {
    console.log(evt);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.main}>
          <Container>
            <Text style={{marginBottom: 30, fontSize: 30}}>Checkbox</Text>
            <View style={{gap: 20}}>
              <Checkbox onChange={func} />
              <Checkbox onChange={func} isDefaultChecked>
                <Text>Мало текста и включен</Text>
              </Checkbox>
              <Checkbox onChange={func}>
                <Text>
                  Много текста и много текста много текста много текста и много
                  текста или много текста много текста
                </Text>
              </Checkbox>
              <Checkbox onChange={func}>
                <Icon name="User" width={40} height={40} />
              </Checkbox>
              <Checkbox isBorder onChange={func}>
                <Text>
                  Checkbox в рамке по макету. Много текста и много текста много
                  текста
                </Text>
              </Checkbox>
              <Checkbox onChange={func} isDisabled>
                <Text>Отключен</Text>
              </Checkbox>
              <Checkbox onChange={func} isDefaultChecked isDisabled>
                <Text>Отключен c галкой</Text>
              </Checkbox>
            </View>
          </Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicyScreen;
