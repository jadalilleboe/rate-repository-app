import React from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    paddingBottom: Constants.statusBarHeight
  },
});

const AppBar = () => {
  return (
  <View style={styles.container}>
      <Pressable onPress={() => Alert.alert('repository pressed')}>
        <Text fontSize='heading' color='appBar' padding='paddingAround'>Repositories</Text>
      </Pressable>
  </View>);
};

export default AppBar;