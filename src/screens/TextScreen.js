import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  return (
  <View>
    <Text>Text Screen</Text>
    <TextInput
      style={styles.inputBar}
      autoCapitalize="none"
      autoCorrect={false}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  inputBar: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
})

export default TextScreen;