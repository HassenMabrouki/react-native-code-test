import {Text} from 'react-native';
import React, {FC} from 'react';

interface Props {
  text: string | number;
  onPress?(): void;
  textStyles?: {};
}

const RegularText: FC<Props> = ({text, onPress, textStyles}) => {
  return (
    <Text style={[textStyles]} onPress={onPress}>
      {text}
    </Text>
  );
};

export default RegularText;
