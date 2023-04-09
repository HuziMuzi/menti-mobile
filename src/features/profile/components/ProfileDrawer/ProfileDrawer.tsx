import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

import styles from './styles';

import Strings from '@app/constants/strings';
import {useAppSelector} from '@app/redux/hooks';
import selectAuth from '@app/features/auth/store/selectors/auth';
import Colors from '@app/ui/colors';
import {Text, View, TouchableOpacity, Icon} from '@app/ui';
import Screens from '@app/navigation/constants/screens';
import Spaces from '@app/ui/spaces';

const ProfileDrawer = (props: DrawerContentComponentProps) => {
  const insets = useSafeAreaInsets();
  const {user} = useAppSelector(selectAuth);

  const {routes, index} = props.state;
  const focusedRoute = routes[index];

  const menu = [
    {
      name: Screens.profileList,
      title: Strings.myPresentations,
      icon: 'Desktop' as const,
    },
    {
      name: Screens.profileTemplate,
      title: Strings.templates,
      icon: 'File' as const,
    },
    {
      name: Screens.profileHelp,
      title: Strings.help,
      icon: 'Lamp' as const,
    },
    {
      name: Screens.profileSettings,
      title: Strings.settings,
      icon: 'Cog' as const,
    },
  ];

  return (
    <View
      style={{
        ...styles.drawer,
        paddingTop: insets.top + Spaces.space20,
        paddingBottom: insets.bottom,
      }}>
      <TouchableOpacity
        style={{...styles.close, top: insets.top + Spaces.space7}}
        onPress={props.navigation.closeDrawer}>
        <Icon name="Close" />
      </TouchableOpacity>

      <View style={styles.list}>
        {menu.map(item => (
          <TouchableOpacity
            key={item.name}
            style={styles.item}
            onPress={() => props.navigation.navigate(item.name)}>
            {focusedRoute?.name === item.name ? (
              <>
                <View style={styles.icon}>
                  <Icon name={item.icon} fill={Colors.blue100} />
                </View>
                <Text style={{...styles.title, color: Colors.blue100}}>
                  {item.title}
                </Text>
              </>
            ) : (
              <>
                <View style={styles.icon}>
                  <Icon name={item.icon} />
                </View>
                <Text style={styles.title}>{item.title}</Text>
              </>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.user}>
        <View style={styles.userIcon}>
          <Icon name="User" />
        </View>
        <Text style={styles.userTitle} numberOfLines={1}>
          {user?.name}
        </Text>
      </View>
    </View>
  );
};

export default ProfileDrawer;
