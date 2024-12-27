import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: 'grey',
    justifyContent:"center",
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
});
