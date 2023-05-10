import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

interface Props {
  isVisible: boolean;
}

const CustomLoader: FC<Props> = ({isVisible}) => {
  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={isVisible}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
        source={require('../assets/lottie/loader.json')}
      />
    </View>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 90,
    height: 90,
  },
});
