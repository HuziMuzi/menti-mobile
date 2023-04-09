import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import ProfileList from '../ProfileList';
import ProfileDrawer from '../../components/ProfileDrawer';
import ProfileSetting from '../ProfileSetting';
import ProfileTemplates from '../ProfileTemplates';
import ProfileHelp from '../ProfileHelp';

import Screens from '@app/navigation/constants/screens';
import {DrawerButton, Header} from '@app/ui';

const Drawer = createDrawerNavigator();

const ProfileScreen = () => {
  const navigation = useNavigation();

  const onPressDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <ProfileDrawer {...props} />}
      screenOptions={() => ({
        header: () => (
          <Header
            isLogo
            isBorder
            right={<DrawerButton onPress={onPressDrawer} />}
          />
        ),
        drawerPosition: 'right',
        drawerType: 'front',
      })}>
      <Drawer.Screen name={Screens.profileList} component={ProfileList} />
      <Drawer.Screen
        name={Screens.profileTemplate}
        component={ProfileTemplates}
      />
      <Drawer.Screen name={Screens.profileHelp} component={ProfileHelp} />
      <Drawer.Screen
        name={Screens.profileSettings}
        component={ProfileSetting}
      />
    </Drawer.Navigator>
  );
};

export default ProfileScreen;
