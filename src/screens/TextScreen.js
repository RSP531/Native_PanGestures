import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
  <View>
    <Text>Text Screen</Text>
    <TextInput
      style={styles.inputBar}
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      onChangeText={(newValue) => setName(newValue)}
    />
    <Text> My name is {name}</Text>
    {name.length > 5 ? null : <Text>Name must be greater than 5 char</Text> }
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