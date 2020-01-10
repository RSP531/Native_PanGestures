import React from 'react';
import { Text, View, StyleSheet, Platform, Image } from 'react-native';
import { Provider as PaperProvider , Button, Appbar, Card } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import ScrollPicker from 'react-native-wheel-scroll-picker';
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

// const nightTime={(() => {
//   let today = new Date();
//   let hour = today.getHours();
//   return hour > 17 || hour < 6 ? custMapStyle : null;
// })()}

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
          <ScrollPicker
            dataSource={[
              'a',
              'b',
              'c',
              'd',
              ]}
            selectedIndex={1}
            renderItem={(data,index,isSelected) => {
              //
            }}
            onValueChange={(data,selectedIndex) => {
              //
            }}
            wrapperHeight={300}
            wrapperWidth={300}
            wrapperBackground={'#FFFFFF'}
            itemHeight={300}
            highlightColor={'#rgb(66, 99, 245)'}
            highlightBorderWidth={2}
            activeItemColor={'#rgb(235, 52, 216)'}
            itemColor={'#rgb(105, 245, 66)'}
          />
          <Text style={styles.headerText}>
            Your New Pick-Up Chuck
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
          {/* <Text style={styles.fadedText}>
            Request
          </Text> */}
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

    </View>
    <Button style={styles.pressMe1} icon="routes" mode="contained" onPress={() => console.log('Taylor the Terrible')}>
        Taylor De-Press me
    </Button>
    <Button style={styles.pressMe2} icon="routes" mode="contained" onPress={() => console.log('Tye the Tiger')}>
        Tye De-Press me 2
    </Button>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 600,
    // width: 400,
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
  pressMe1: {
    margin: 10,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  pressMe2: {
    margin: 10,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
    fontSize: 24
  },
  pickUpCard: {
    margin: '20%',
    height: 200,
    width: 280,
    borderColor: 'black',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'rgb(102, 102, 255)',
  },
  cardAlign: {
    alignItems: 'center',
  },
  bottomButtons: {
    marginTop: 100,
    height: 30,
    width: '50%'
  }
})

export default BoxScreen;