import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, } from 'react-native';
import { TicTacToe } from './components/screens';

export const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />

      <TicTacToe />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // body of the app
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})
