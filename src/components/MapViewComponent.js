import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

const MapViewComponent = ({ location }) => {
  return (
    <View style={styles.mapContainer}>
      {location && (
        <MapView style={styles.map} region={location}>
          <Marker coordinate={location} />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: { flex: 1 },
  map: { flex: 1 }
});

export default MapViewComponent;
