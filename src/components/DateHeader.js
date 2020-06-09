import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function DateHeader() {
  const date = new Date();
  const month = date.toLocaleString('default', {month: 'short'});
  const dateMonth = date.getDate();

  return (
    <>
      <View style={styles.dateMonth}>
        <Text style={styles.date}>{dateMonth}</Text>
        <Text style={styles.month}>{month}</Text>
      </View>
    </>
  );
}

export default DateHeader;

const styles = StyleSheet.create({
  dateMonth: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    flex: 0.3,
  },
  date: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Rubik-Bold',
  },
  month: {
    color: 'white',
    fontSize: 24,
    textTransform: 'uppercase',
    fontFamily: 'HammersmithOne-Regular',
  },
});
