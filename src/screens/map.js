import React, { useState } from "react";
import MapView from "react-native-maps";
import { Text, View, useWindowDimensions } from "react-native";

// TODO: put this in store rather, live updates are slow
const initialMapState = {
  region: {
    latitude: -34.125061, // echo valley
    longitude: 18.447682,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};

export default function MapScreen({ navigation }) {
  const window = useWindowDimensions();
  const [mapState] = useState(initialMapState);
  const mapStyle = {
    width: window.width,
    height: window.height,
  };

  return (
    <View>
      <Text>Map</Text>
      <MapView style={mapStyle} region={mapState.region} />
    </View>
  );
}
