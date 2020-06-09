import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = props => (
  <MaskedView maskElement={<Text {...props} />}>
    <LinearGradient colors={['#21BBC5', '#005484']}>
      <Text {...props} style={[props.style, {opacity: 0}]} />
    </LinearGradient>
  </MaskedView>
);

export default GradientText;
