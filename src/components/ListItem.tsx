import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import normalize from 'react-native-normalize';
import RegularText from './RegularText';

interface Props {
  avatarUrl: string;
  userName: string;
}

const ListItem: FC<Props> = ({avatarUrl, userName}) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.avatar}
        source={{
          uri: avatarUrl,
          priority: FastImage.priority.normal,
        }}
      />
      <RegularText text={userName} textStyles={styles.name} />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: normalize(64),
    height: normalize(64),
    borderRadius: 100,
  },
  name: {
    fontSize: normalize(16),
    color: '#000',
    fontWeight: '500',
    marginLeft: 24,
  },
});
