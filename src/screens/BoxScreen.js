import React from 'react';
import { Text, View, StyleSheet, Platform, Image } from 'react-native';
import { Provider as PaperProvider , Button, Appbar, Card } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]

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
        customMapStyle={mapStyle}
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
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
            }}
          />
          {/* <Image style={{height:20}} source='https://raw.githubusercontent.com/RitzCarltonCarService/RitzCarltonCarService/master/assets/RitzLogo.png'>
            hi
          </Image> */}
          <Text style={styles.fadedText}>
            Request
          </Text>
          <Image 
            source={require('../../assets/RitzLogo.png')}
            style={{height: 80,resizeMode: 'center', alignSelf:'flex-end'}}
          />
          {/* <Button style={styles.pressMe} icon="keyboard-backspace" mode="contained" onPress={() => console.log('Johnny Tsunami')}>
            Jonathan Press me
          </Button>
          <Button style={styles.pressMe} icon="bat" mode="contained" onPress={() => console.log('Bats fly high')}>
          </Button> */}
        </Card>
      </View>
      {/* <View style={styles.bottomButtons}>
      <Button style={styles.pressMe} icon="routes" mode="contained" onPress={() => console.log('Taylor the Great')}>
        Taylor Press me
      </Button>

      </View> */}
      <Button style={styles.pressMe} icon="routes" mode="contained" onPress={() => console.log('Taylor the Terrible')}>
        Taylor De-Press me
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
    marginVertical: 10,
  },
  fadedText: {

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
    marginTop: 'auto'
  },
  pickUpCard: {
    margin: 20,
    height: 300,
    width: 280,
    borderColor: 'black',
    alignItems: 'center',
    alignContent: 'center'
  },
  cardAlign: {
    alignItems: 'center',
  },
  bottomButtons: {
    marginTop: 100
  }
})

export default BoxScreen;