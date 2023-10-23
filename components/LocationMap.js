import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

//Laver en komponent, som returnerer et kort
//Kortet er initialiseret med en region, som er sat til at være
const LocationMap = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [userMarkerCoordinates, setUserMarkerCoordinates] = useState([]);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  return (
//sætter en lokation på kortet
    <MapView 
      style={styles.map}
      initialRegion={{
        latitude: 34.78825,
        longitude: -142.44,
        latitudeDelta: 0.092,
        longitudeDelta: 0.041,
      }}
    />
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    map: {
      flex: 1
    }
  });
  

export default LocationMap;