import React from 'react';

import {View, SafeAreaView, Text, Container} from '@app/ui';
import Spaces from '@app/ui/spaces';
import Strings from '@app/constants/strings';

const ProfileHelp = () => {
  return (
    <SafeAreaView>
      <View style={{paddingVertical: Spaces.space5}}>
        <Container>
          <Text style={{marginBottom: Spaces.space5}}>
            {Strings.inDevelopmentDesc}
          </Text>
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default ProfileHelp;
