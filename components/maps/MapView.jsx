import React, { useRef } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const INITIAL_REGION = {
  latitude: -6.200000,
  longitude: 106.816666,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Mapview = () => {

  return (
    <View className="flex-1">
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation={true}
        showsMyLocationButton={true}
      />
    </View>
  );
}

export default Mapview;
