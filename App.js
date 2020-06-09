import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from './src/components/GradientText';
import {BlurView} from '@react-native-community/blur';
import DateHeader from './src/components/DateHeader';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#19332E', '#000C08']}
        style={styles.linearGradient}>
        <View style={styles.background}>
          <GradientText style={styles.backgroundText}>
            <Text style={styles.text}>2020</Text>
          </GradientText>
          <BlurView style={styles.blurBg} blurType="extraDark" blurAmount={5} />
        </View>
        <Swiper loop={false}>
          <SafeAreaView style={{flex: 1}}>
            <DateHeader />
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <Text>Hello</Text>
              <Text>Hello</Text>
            </ScrollView>
          </SafeAreaView>

          <SafeAreaView>
            <Text>Beautiful</Text>
          </SafeAreaView>
        </Swiper>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  blurBg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundText: {
    position: 'relative',
    transform: [{rotate: '-51deg'}],
    textShadowColor: '#00878B',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 80,
    width: 1500,
    marginBottom: 500,
    marginLeft: 400,
  },
  text: {
    fontSize: 310,
    fontFamily: 'Rubik-Bold',
  },
  linearGradient: {
    flex: 1,
  },
});

export default App;
