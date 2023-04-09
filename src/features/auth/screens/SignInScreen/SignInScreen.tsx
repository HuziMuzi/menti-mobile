import React from 'react';
import {Link, StackActions} from '@react-navigation/native';

import styles from './styles';

import Strings from '@constants/strings';
import Screens from '@navigation/constants/screens';
import SignInForm from '@auth/components/SignInForm';
import Logo from '@assets/svg/logo/logo.svg';
import {
  Text,
  View,
  SafeAreaView,
  Container,
  KeyboardAwareScrollView,
} from '@app/ui';

const SignInScreen = () => {
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.main}>
          <Container>
            <Logo style={styles.logo} />
            <Text style={styles.greetings}>{Strings.greetings}</Text>
            <Text style={styles.desc}>{Strings.signInText}</Text>

            <View style={styles.form}>
              <SignInForm />
            </View>

            <View style={styles.alreadyContainer}>
              <Text style={styles.alreadyText}>{Strings.notMember}</Text>
              <Link
                style={styles.link}
                to={{screen: `${Screens.signUp}`}}
                action={StackActions.replace(Screens.signUp)}>
                {Strings.signUp}
              </Link>
            </View>
          </Container>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
