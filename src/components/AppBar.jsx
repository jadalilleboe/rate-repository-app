import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
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
    <ScrollView horizontal>
      <Link to='/'>
        <Text fontSize='heading' color='appBar' padding='paddingAround'>Repositories</Text>
      </Link>
      <Link to='/signin'>
        <Text fontSize='heading' color='appBar' padding='paddingAround'>Sign In</Text>
      </Link>
    </ScrollView>
  </View>);
};

export default AppBar;