import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

function Map() {
  const region = {
    latitude: 3.56607470645906,
    longitude: 98.87483736149491,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} initialRegion={region} />;
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
