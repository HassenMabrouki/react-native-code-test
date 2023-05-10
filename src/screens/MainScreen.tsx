/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, StatusBar, View} from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import CustomLoader from '../components/CustomLoader';
import ListItem from '../components/ListItem';
import axios from 'axios';
import ItemSeparator from '../components/ItemSeparator';
import ListFooter from '../components/ListFooter';
import Header from '../components/Header';

interface Props {}

const MainScreen: FC<Props> = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>();
  const [noMoreUsers, setNoMoreUsers] = useState<boolean>(false);

  const checkMore = useCallback(() => {
    if (totalPages && page < totalPages) {
      setPage(page + 1);
    } else {
      setNoMoreUsers(true);
    }
  }, [page, totalPages]);

  const fetchData = useCallback(async () => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then(response => {
        setTotalPages(response?.data?.total_pages);
        setUserData([...userData, ...response?.data?.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page]);

  useEffect(() => {
    (() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    })();
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  if (loading) {
    return <CustomLoader isVisible={loading} />;
  }
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={loading ? '#fff' : '#F1F1F1'}
      />
      {!loading && <Header />}
      <View style={styles.container}>
        <FlatList
          data={userData}
          keyExtractor={(item: any) => item?.id}
          onEndReached={checkMore}
          ItemSeparatorComponent={() => <ItemSeparator />}
          ListFooterComponent={<ListFooter visible={noMoreUsers} />}
          renderItem={(item: any) => (
            <ListItem
              avatarUrl={item?.item?.avatar}
              userName={`${item?.item?.first_name} ${item?.item?.last_name}`}
            />
          )}
        />
      </View>
    </>
  );
};

export default MainScreen;
