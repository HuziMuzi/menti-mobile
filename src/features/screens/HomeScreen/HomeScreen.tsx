import React from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

import {NavigationType} from '@navigation/types';
import Strings from '@constants/strings';
import Screens from '@navigation/constants/screens';
import {useAppSelector} from '@app/redux/hooks';
import PresentationCodeForm from '@app/features/components/PresentationCodeForm';
import selectAuth from '@app/features/auth/store/selectors/auth';
import Logo from '@assets/svg/logo/logo.svg';
import {
  AppButtonLink,
  SafeAreaView,
  View,
  Text,
  AppButton,
  Container,
  DismissKeyboard,
} from '@app/ui';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const {user} = useAppSelector(selectAuth);

  const onPressSignIn = () => {
    navigation.navigate(Screens.signIn);
  };

  const onPressSignUp = () => {
    navigation.navigate(Screens.signUp);
  };

  const onPressProfile = () => {
    navigation.navigate(Screens.profile);
  };

  const onPressPrivacyPolicy = () => {
    navigation.navigate(Screens.privacyPolicy);
  };

  return (
    <SafeAreaView edges={['top', 'right', 'bottom', 'left']}>
      <DismissKeyboard>
        <View style={styles.screen}>
          <View style={styles.main}>
            <Container>
              <Logo style={styles.logo} />
              <Text style={styles.title}>{Strings.connectionCode}</Text>
              <View style={styles.form}>
                <PresentationCodeForm />
              </View>
              <Text style={styles.text}>
                {Strings.beforeConnect}{' '}
                <Text style={styles.link} onPress={onPressPrivacyPolicy}>
                  {Strings.privacyPolicy}
                </Text>
              </Text>
            </Container>
          </View>

          <View style={styles.footer}>
            <Container>
              {user ? (
                <>
                  <AppButton
                    type="primary"
                    title={Strings.myPresentations}
                    style={styles.footerButton}
                    onPress={onPressProfile}
                  />
                  <Text style={styles.footerUserName}>{user.name}</Text>
                </>
              ) : (
                <>
                  <AppButton
                    type="primary"
                    title={Strings.signIn}
                    onPress={onPressSignIn}
                    style={styles.footerButton}
                  />
                  <AppButtonLink
                    title={Strings.signUp}
                    onPress={onPressSignUp}
                  />
                </>
              )}
            </Container>
          </View>
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default HomeScreen;
