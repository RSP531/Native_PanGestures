import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.text}>
      <Text style={styles.text}>Home Screen</Text>
      <Button 
        style={styles.text}
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        style={styles.text}
        title="Go to List Screen"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        style={styles.text}
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Images')}
      />
      <Button
        style={styles.text}
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        style={styles.text}
        title="Go to Drag and Drop"
        onPress={() => navigation.navigate('Bucket')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 10
  }
});

export default HomeScreen;
