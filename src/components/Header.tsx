import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import RegularText from './RegularText';
import normalize from 'react-native-normalize';
interface Props {}

const Header: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <RegularText text={'Users'} textStyles={styles.text} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(40),
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: normalize(14),
    fontWeight: '600',
    color: '#000',
  },
});
