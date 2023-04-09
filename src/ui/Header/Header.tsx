import React, {useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import getStyles from './styles';
import {IProps} from './types';

import LogoIcon from '@assets/svg/logo/logo-icon.svg';
import {Container, GoBackButton, View, Text} from '@app/ui';

const Header = (props: IProps) => {
  const styles = useCallback(() => getStyles(props), [props])();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const {left, isLogo, right, title} = props;

  return (
    <View
      style={{
        ...styles.header,
        paddingTop: insets.top,
        height: 60 + insets.top,
      }}>
      <Container>
        <View style={styles.grid}>
          <View style={styles.left}>
            {left ? left : <GoBackButton onPress={navigation.goBack} />}
          </View>
          {isLogo && <LogoIcon />}
          {title && <Text>{title}</Text>}
          <View style={styles.right}>{right && right}</View>
        </View>
      </Container>
    </View>
  );
};

export default Header;
