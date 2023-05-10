import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import RegularText from './RegularText';
import normalize from 'react-native-normalize';
interface Props {
  visible: boolean;
}

const ListFooter: FC<Props> = ({visible}) => {
  if (!visible) return <View />;

  return (
    <View style={styles.container}>
      <RegularText text={'There are no more users!'} textStyles={styles.text} />
    </View>
  );
};

export default ListFooter;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: normalize(12),
    color: '#000',
  },
});
