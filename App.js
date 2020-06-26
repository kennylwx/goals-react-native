import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from './src/components/GradientText';
import {BlurView} from '@react-native-community/blur';
import DateHeader from './src/components/DateHeader';
import GoalToolbar from './src/components/GoalToolbar';

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
        </View>
        <Swiper loop={false}>
          {/* First Screen */}
          <SafeAreaView style={{flex: 1}}>
            <DateHeader />
            <GoalToolbar />
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <View style={styles.container}>
                <BlurView
                  style={styles.absolute}
                  blurType="dark"
                  blurAmount={10}
                  reducedTransparencyFallbackColor="white"
                />
                <Text>
                  I'm the non blurred text because I got rendered on top of the
                  BlurView
                </Text>
              </View>
              <View style={styles.container}>
                <BlurView
                  style={styles.absolute}
                  blurType="dark"
                  blurAmount={10}
                  reducedTransparencyFallbackColor="black"
                />
                <Text>Medium</Text>
                <Text>Score a 175 on the LSAT</Text>
                <Text>
                  Getting into law school of my dreams, graduating with honours.
                </Text>
              </View>
            </ScrollView>
          </SafeAreaView>
          {/* Secondary Screen */}
          <SafeAreaView>
            <Text>Beautiful</Text>
          </SafeAreaView>
        </Swiper>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 12,
    marginRight: 12,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
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
