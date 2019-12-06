import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Rob';

  return (
    <View>
      <Text style={styles.textOne}> Getting started with React Native! </Text>
      <Text style= {styles.textTwo}> My name is {greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textOne: {
    fontSize: 45
  },
  textTwo: {
    fontSize: 20
  }
});

export default ComponentsScreen;