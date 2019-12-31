import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color , onIncrease, onDecrease }) => {
  return (
    <View style={styles.list}>
      <Text>{color}</Text>
      <Button style={styles.button} onPress={() => onIncrease()} title={`Increase ${color}`}/>
      <Button style={styles.button} onPress={() => onDecrease()} title={`Decrease ${color}`}/>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: 100,
    alignSelf: 'center',
    margin: 5
  },
  button: {
    padding: 5
  }
});

export default ColorCounter;