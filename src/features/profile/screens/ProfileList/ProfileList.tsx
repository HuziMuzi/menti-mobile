import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import selectProfile from '../../store/selectors/profile';
import EmptyProfile from '../../components/EmptyProfile';
import ItemPresentation from '../../components/ItemPresentation';
import CreatePresentation from '../../components/CreatePresentation';

import styles from './styles';

import Strings from '@constants/strings';
import {
  View,
  SafeAreaView,
  Text,
  Container,
  AppInput,
  DismissKeyboard,
  Icon,
} from '@app/ui';
import Colors from '@app/ui/colors';
import Spaces from '@app/ui/spaces';
import {useAppDispatch, useAppSelector} from '@app/redux/hooks';
import api from '@app/api';
import {IPresentationInListResponse} from '@app/api/rest/presentation/type';

const ProfileList = () => {
  const dispatch = useAppDispatch();
  const {isLoading, presentations} = useAppSelector(selectProfile);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState<IPresentationInListResponse[]>();
  const {getAllPresentations} = api.presentation;

  useEffect(() => {
    dispatch(getAllPresentations());
  }, []);

  useEffect(() => {
    if (search.length > 1) {
      const lowerCaseSearch = search.toLowerCase();
      const filterPresentations = presentations.filter(item => {
        const name = item.name.toLowerCase();
        return name.includes(lowerCaseSearch);
      });

      setFilterData(filterPresentations);
    } else {
      setFilterData(undefined);
    }
  }, [search]);

  if (presentations.length === 0 && isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{Strings.loading}</Text>
      </View>
    );
  }

  if (presentations.length === 0 && !isLoading) {
    return <EmptyProfile />;
  }

  return (
    <SafeAreaView>
      <DismissKeyboard style={{flex: 1}}>
        <View style={styles.main}>
          <Container style={{flex: 1}}>
            <Text style={styles.title}>{Strings.myPresentations}</Text>
            <CreatePresentation />
            <View style={styles.search}>
              <AppInput
                placeholder={Strings.findPresentation}
                accessoryLeft={<Icon name="Search" fill={Colors.black25} />}
                borderBottom
                onChangeText={setSearch}
                value={search}
              />
            </View>
            <FlatList
              data={filterData ? filterData : presentations}
              extraData={presentations}
              renderItem={({item}) => <ItemPresentation presentation={item} />}
              keyExtractor={item => item.id.toString()}
              ListEmptyComponent={<Text>{Strings.nothingFound}</Text>}
              ListFooterComponent={
                <View style={{height: Spaces.space10}}></View>
              }
            />
          </Container>
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default ProfileList;
