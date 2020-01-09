import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Provider as PaperProvider , Button, Appbar, Card } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const BoxScreen = () => {

  return (
    <>
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    </View>
      <Appbar style={styles.bottom}>
        <Appbar.Action icon="menu" onPress={() => console.log('Pressed menu Bee-otch')} />
      </Appbar>
    <View style={styles.viewStyle}> 
      <View style={styles.cardAlign}>
        <Card style={styles.pickUpCard}>
          <Text style={styles.headerText}>
            Your New Pick-Up
          </Text>
          <Text style={styles.headerText}>
            Request
          </Text>
          <Button style={styles.pressMe} icon="keyboard-backspace" mode="contained" onPress={() => console.log('Johnny Tsunami')}>
            Jonathan Press me
          </Button>
          <Button style={styles.pressMe} icon="bat" mode="contained" onPress={() => console.log('Bats fly high')}>
          </Button>
        </Card>
      </View>
      <Button style={styles.pressMe} icon="routes" mode="contained" onPress={() => console.log('Taylor the Terrible')}>
        Taylor Press me
      </Button>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  viewStyle: {
    // borderWidth: 3,
    // borderColor: 'black',
    alignItems: 'center',
    backgroundColor: 'rgb(102, 102, 255)',
    backgroundColor: 'transparent'
  },
  headerText: {
    ...Platform.select({
      ios: { fontFamily: 'Arial', }, 
      android: { fontFamily: 'Roboto' }
    }),
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10
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

  },
  bottom: {
    backgroundColor: 'black'
  },
  pressMe: {
    margin: 10,
    backgroundColor: 'black',
  },
  pickUpCard: {
    margin: 20,
    height: 200,
    width: 300,
    borderColor: 'black',
    alignItems: 'center',
    alignContent: 'center'
  },
  cardAlign: {
    alignItems: 'center',
  }
})

export default BoxScreen;