import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () =>{

  return (
    <View style={styles.viewStyle}> 
      <Text style={styles.textStyle}>Child #1 </Text>
      <Text style={styles.textStyle}>Child #2 </Text>
      <Text style={styles.textStyle}>Child #3 </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center'
  },
  textStyle: {
    borderWidth: 3,
    margin: 10,
    borderColor: 'blue',
  },
  childOne: {
    borderColor: 'red',
    margin: 20,
  },
  childTwo: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 20,
  },
  childThree: {

  }
})

export default BoxScreen;