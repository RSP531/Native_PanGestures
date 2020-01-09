import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
    <View style={styles.viewStyle}> 
      <Appbar style={styles.bottom}>
        <Appbar.Action icon="menu" onPress={() => console.log('Pressed menu')} />
        {/* <Appbar.Action style={styles.bottom} icon="archive" onPress={() => console.log('Pressed archive')} />
        <Appbar.Action icon='mail' onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} /> */}
      </Appbar>
      <View style={styles.cardAlign}>
        <Card style={styles.pickUpCard}>
          <Button style={styles.pressMe} icon="menu" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
          </Button>
        </Card>
      </View>
      <Button style={styles.pressMe} icon="menu" mode="contained" onPress={() => console.log('Taylor the Terrible')}>
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
    alignItems: 'flex-start',
    backgroundColor: 'rgb(102, 102, 255)'
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
    backgroundColor: 'black'
  },
  pickUpCard: {
    margin: 10,
    height: 100,
    borderColor: 'black',
    alignItems: 'center',
  },
  cardAlign: {
    alignItems: 'center',
  }
})

export default BoxScreen;