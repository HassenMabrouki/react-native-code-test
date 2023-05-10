import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
interface Props {}

const ItemSeparator: FC<Props> = ({}) => {
  return <View style={styles.separator} />;
};

export default ItemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    marginVertical: 20,
  },
});
