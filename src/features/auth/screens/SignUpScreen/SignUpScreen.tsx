import React from 'react';
import {Link, StackActions, useNavigation} from '@react-navigation/native';

import styles from './styles';

import {NavigationType} from '@app/navigation/types';
import Strings from '@constants/strings';
import Screens from '@navigation/constants/screens';
import SignUpForm from '@auth/components/SignUpForm';
import Logo from '@assets/svg/logo/logo.svg';
import {
  SafeAreaView,
  Text,
  View,
  Container,
  KeyboardAwareScrollView,
} from '@app/ui';

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationType>();

  const onPressPrivacyPolicy = () => {
    navigation.navigate(Screens.privacyPolicy);
  };

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.main}>
          <Container>
            <Logo style={styles.logo} />
            <Text style={styles.greetings}>{Strings.greetings}</Text>
            <Text style={styles.desc}>{Strings.createAccount}</Text>

            <View style={styles.form}>
              <SignUpForm />
            </View>

            <Text style={styles.privacy}>
              {Strings.beforeRegistration}{' '}
              <Text style={styles.link} onPress={onPressPrivacyPolicy}>
                {Strings.privacyPolicy}
              </Text>
            </Text>

            <View style={styles.alreadyContainer}>
              <Text style={styles.alreadyText}>{Strings.alreadyMember}</Text>
              <Link
                style={styles.link}
                to={{screen: `${Screens.signIn}`}}
                action={StackActions.replace(Screens.signIn)}>
                {Strings.signIn}
              </Link>
            </View>
          </Container>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
