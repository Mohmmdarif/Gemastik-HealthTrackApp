import React, { useEffect, useContext, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';



const Mapview = () => {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Please grant permission to access location access');
        return;
      }

      try {
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } catch (error) {
        console.log('Error getting location: ', error)
        setErrorMsg('Error getting location. Please try again');
      }

    }
    getPermission();
  }, [])

  if (errorMsg) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-sm font-psemibold">{errorMsg}</Text>
      </View>
    );
  }


  return (
    <View className="flex-1">
      {location ? (
        <MapView
          style={{ height: '95%' }}
          initialRegion={location}
          showsUserLocation={true}
          showsMyLocationButton={true}
          provider={PROVIDER_GOOGLE}
        >
          <Marker
            coordinate={location}
            title="You are here"
            description="This is your current location"
          />
        </MapView>
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Mapview;
