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
import {LinearTextGradient} from 'react-native-text-gradient';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#19332E', '#000C08']}
        style={styles.linearGradient}>
        <View style={styles.background}>
          <LinearTextGradient
            style={styles.backgroundText}
            locations={[0, 1]}
            colors={['#21BBC5', '#005484']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Text numberOfLines={1}>2020</Text>
          </LinearTextGradient>
        </View>
        <Swiper loop={false}>
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
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
  backgroundText: {
    fontSize: 300,
    fontFamily: 'Rubik-Bold',
    position: 'relative',
    transform: [{rotate: '-51deg'}],
    textShadowColor: '#00878B',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 90,
  },
  linearGradient: {
    flex: 1,
  },
});

export default App;
