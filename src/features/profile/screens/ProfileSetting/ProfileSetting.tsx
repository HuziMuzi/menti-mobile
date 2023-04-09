import React from 'react';

import {View, SafeAreaView, Text, Container, AppButton} from '@app/ui';
import Strings from '@app/constants/strings';
import {useAppDispatch, useAppSelector} from '@app/redux/hooks';
import selectAuth from '@app/features/auth/store/selectors/auth';
import Spaces from '@app/ui/spaces';
import {logout} from '@app/features/auth/store/authSlice';

const ProfileSetting = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(selectAuth);

  const onPressLogout = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView>
      <View style={{paddingVertical: Spaces.space5}}>
        <Container>
          <Text style={{marginBottom: Spaces.space5, fontSize: 20}}>
            {user?.name}
          </Text>
          <AppButton
            onPress={onPressLogout}
            type="primary"
            title={Strings.signOut}
          />
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default ProfileSetting;
